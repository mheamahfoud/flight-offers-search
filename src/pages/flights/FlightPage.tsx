
import styled from 'styled-components';
import { useQueryResponseLoading } from './core/QueryResponseProvider';
import SpinnerFlight from '../../components/SpinnerTail';
import FLightItem from './components/FLightItem';
import Carrier from './components/Carrier';
import Stops from './components/Stops';
import FlightsPrice from './components/Flights';
import DepartureTime from './components/DeprtureTime';
import { useListView } from './core/QueryListViewProvider';

const Container = styled.div``;
const Filter = styled.div``;
const Flight = styled.div``;
const FlightPage = () => {

    const isLoading = useQueryResponseLoading();
    const {filterData } = useListView();

    // const flights = useMemo((data) => data,[data]);
    return (
        <Container className='flex  gap-4   px-44   py-6  bg-[#e6f0ff]'>
            {isLoading && <SpinnerFlight />}

            <Filter className='w-1/5  p-2   '>
                <Stops />
                <Carrier />
                <DepartureTime />
                <FlightsPrice />


            </Filter>

            <Flight className='w-4/5'>

                {
                    filterData.map((item) => {
                        return <FLightItem item={item} />
                    })
                }
            </Flight>


        </Container>
    );
}

export default FlightPage;
