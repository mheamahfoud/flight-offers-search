/* eslint-disable react-hooks/exhaustive-deps */
import { FC, createContext, useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { FlightModel } from './model';
import { WithChildren } from '../../../helpers/react18MigrationHelpers'
import { QUERIES } from '../../../helpers/constant'
import { getOfferFlights } from './resquest'
import { useLocation } from 'react-router-dom'
import SpinnerFlight from '../../../components/SpinnerTail';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
type ObjectList = {
    value: string;
    text: string
}
type QueryResponseContextProps<T> = {
    response?: T
    refetch: () => void
    isLoading: boolean,
}
function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
    return createContext(initialState)
}
export const initialQueryResponse = { refetch: () => { }, isLoading: false }

const QueryResponseContext = createResponseContext<FlightModel | undefined>(initialQueryResponse)
const QueryResponseProvider: FC<WithChildren> = ({ children }) => {
    const { departureDate, returnDate, adults, infants, children: childs, originLocationCode, destinationLocationCode,  } = useLocation().state;
    const url = `?departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&infants=${infants}&children=${childs}&originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}`
    const navigate = useNavigate();
    // const temp = "?departureDate=2023-11-24&returnDate=2023-12-01&adults=1&infants=0&children=0&originLocationCode=LON&destinationLocationCode=PAR"
    const {
        isFetching,
        refetch,
        data: response,
    } = useQuery(
        `${QUERIES.FlightsOffer}`,
        () => {
            return getOfferFlights(url);
        },
        { cacheTime: 3600000, keepPreviousData: true, refetchOnWindowFocus: false }
    )

    useEffect(() => {
        if (!response) return;
        if (response.data.length < 1) {
            toast.error('لايوحد رحلات');
            navigate('/')
        }
    }, [response])




    return (
        <QueryResponseContext.Provider
            value={{
                isLoading: isFetching,
                refetch,
                response,

            }}
        >
            {isFetching ? <SpinnerFlight /> : children}
        </QueryResponseContext.Provider>
    )
}

const useQueryResponse = () => useContext(QueryResponseContext)




const useQueryResponseFlights = () => {
    const { response } = useQueryResponse()
    if (!response) {
        return []
    }
    return response.data;
}

const useQueryResponseCarries = (): ObjectList[] => {
    const { response } = useQueryResponse()
    if (!response?.dictionaries) {
        return []
    }
    const carriers = response.dictionaries.carriers;
    return Object.keys(carriers).map(key => ({
        value: key,
        text: carriers[key]
    }));;
}

// const useQueryResponseData = () => {
//     const { response } = useQueryResponse()
//     if (!response) {
//         return []
//     }
//     alert(JSON.stringify(response))

//     return response.data;
// }


const useQueryResponseLoading = (): boolean => {
    const { isLoading } = useQueryResponse()
    return isLoading
}




export {
    QueryResponseProvider,
    useQueryResponse,

    useQueryResponseCarries,
    useQueryResponseFlights,
    useQueryResponseLoading,

}
