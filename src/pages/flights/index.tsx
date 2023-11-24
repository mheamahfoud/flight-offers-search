
import { QueryResponseProvider } from './core/QueryResponseProvider';
import FlightPage from './FlightPage';
import { ListViewProvider } from './core/QueryListViewProvider';



const index= () => {

    return (
        <QueryResponseProvider>
            <ListViewProvider>
                <FlightPage />
            </ListViewProvider>

        </QueryResponseProvider>

    );
}

export default index;
