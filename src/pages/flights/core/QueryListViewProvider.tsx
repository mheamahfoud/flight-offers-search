import { FC, useState, createContext, useContext, useMemo, } from 'react'
import { useQueryResponseCarries, useQueryResponseFlights } from './QueryResponseProvider'
import { WithChildren } from '../../../helpers/react18MigrationHelpers'
import { FLightData } from './model'
import { groupingOnSelect } from '../../../helpers'
export type ID = undefined | null | number | string

export enum DepartureEnum  {
    MIDNIGHT_TO_5AM="MIDNIGHT_TO_5AM",
    FIVE_AM_TO_NOON="FIVE_AM_TO_NOON",
    NOON_TO_5PM="NOON_TO_5PM",
    FIVE_PM_TO_MIDNIGHT="FIVE_PM_TO_MIDNIGHT"

}

export const DepartureType = {
    MIDNIGHT_TO_5AM: { start: 0, end: 4 },
    FIVE_AM_TO_NOON: { start: 5, end: 11 },
    NOON_TO_5PM: { start: 12, end: 16 },
    FIVE_PM_TO_MIDNIGHT: { start: 17, end: 23 },

}
export type ListViewContextProps = {
    selectedCarrier: Array<string>
    onSelectCarrier: (selectedId: string) => void,
    onSelectCarrierAll: () => void,
    filterData: FLightData[],
    departureTimes: string[],
    onDepartureTime: (type: any) => void
    // disabled: boolean,


}

export const initialListView: ListViewContextProps = {
    selectedCarrier: [],
    onSelectCarrier: () => { },
    departureTimes:[],
    //@ts-ignore
    onDepartureTime: (type: any) => { },
    filterData: [],
    onSelectCarrierAll: () => { }
    // disabled: false,

}
//@ts-ignore
function filterFlightOffersByTimeRange(flightOffers: FLightData[], timeRange: { start: number, end: number }) {
    const { start, end } = timeRange;
    return flightOffers.filter((offer) => {
        return offer.itineraries.some((itinerary) => {
            return itinerary.segments.some((segment) => {
                const departureTime = new Date(segment.departure.at).getHours();
                return departureTime >= start && departureTime <= end;
            });
        });
    });
}
function filterFlightOffersByCarrierCode(flightOffers: FLightData[], carrierCodes: string[]) {
    return flightOffers.filter((offer) => {
        // Check if any segment in the itineraries array has a matching carrierCode
        return offer.itineraries.some((itinerary) => {
            return itinerary.segments.some((segment) => {
                return carrierCodes.includes(segment.carrierCode);
            });
        });
    });
}
const ListViewContext = createContext<ListViewContextProps>(initialListView)
const ListViewProvider: FC<WithChildren> = ({ children }) => {
    const carriers = useQueryResponseCarries();
  
    const [departureTimes, setDepartureTimes] = useState<Array<string>>(Object.keys(DepartureType))
    const [selectedCarrier, setSelectedCarrier] = useState<Array<string>>(carriers.map(x => x.value))
    const data = useQueryResponseFlights();



    const filterData = useMemo(() => {
        //    alert(JSON.stringify(selectedCarrier))                                 
        return filterFlightOffersByCarrierCode(data, selectedCarrier)
        // data.filter(x => x.itineraries.filter(y => selectedCarrier.some(ai =>y.segments.map(s => s.carrierCode).includes(ai))));
    }, [data, selectedCarrier , departureTimes])



    return (
        <ListViewContext.Provider
            value={{
                selectedCarrier,
                filterData,
                onSelectCarrier: (carrierCode: string) => {
                    groupingOnSelect(carrierCode, selectedCarrier, setSelectedCarrier)

                },
                onSelectCarrierAll: () => {
                    if (carriers.length == selectedCarrier.length) return;
                    setSelectedCarrier(carriers.map(x => x.value))

                },
                departureTimes,
                onDepartureTime: (type: string) => {
                    groupingOnSelect(type, departureTimes, setDepartureTimes)
                   
                }

            }}
        >
            {children}
        </ListViewContext.Provider>
    )
}

const useListView = () => useContext(ListViewContext)

export { ListViewProvider, useListView }
