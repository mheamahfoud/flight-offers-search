
import { useAuth } from '../../../../auth/ContextProvider';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


const SearchButton = () => {
    const { filter } = useAuth();
    const navigate = useNavigate();
    const handleClick = () => {
////?departureDate=${!filter.departureDate ? moment().format("YYYY-MM-DD") : filter.departureDate}&returnDate=${!filter.returnDate ? moment().add(1, 'week').format('YYYY-MM-DD') : filter.returnDate}&adults=${filter.adults}&infants=${filter.infants}&children=${filter.children}&originLocationCode=${filter.originLocationCode}&destinationLocationCode=${filter.destinationLocationCode}&currency=${filter.currency}
        navigate(`/flights`,
            {
                state: {
                    originLocationCode: filter.originLocationCode,
                    destinationLocationCode: filter.destinationLocationCode,
                    departureDate: !filter.departureDate ? moment().format("YYYY-MM-DD"):filter.departureDate,
                    returnDate: !filter.returnDate ? moment().add(1, 'week').format('YYYY-MM-DD') : filter.returnDate,
                    adults: filter.adults,
                    infants: filter.infants,
                    children: filter.children,
                    currency: 'SAR'
                },
            });
    }
    return (
        <button onClick={handleClick} className='w-2/5   p-4 text-white     relative flex whitespace-nowrap bg-secondary  hover:bg-primary' >
            <p className='text-center text-xl font-bold w-full'>
                بحث عن رحلة
            </p>
        </button>
    );
}

export default SearchButton;
