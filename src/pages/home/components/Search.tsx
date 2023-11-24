import Background from '../../../assets/images/search-background.jpg'
import styled from 'styled-components';
import Filter1 from './search-filter/Filter1';
import Filter2 from './search-filter/Filter2';
import Filter3 from './search-filter/Filter3';
import Filter4 from './search-filter/Filter4';
import SearchButton from './search-filter/SearchButton';
import Calendar from './search-filter/Calendar';
import SelectFilter from './search-filter/filterCities/SelectFilter';
const Container = styled.div`
    background-color: #e6f0ff;
    min-height: 616px;
    position: relative;
`;

const BackGround = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    border: none;
background-color: rgba(0, 0, 0, 0);
    background-position: center center;
    background-size: cover;
    background-image: url(${Background});
`;



const Search = () => {
    return (
        <Container className='flex flex-col gap-4   px-44   py-6 '>
            <BackGround className='w-full h-full'>

            </BackGround>
            <Filter1 />


            <Filter2 />

            <SelectFilter />


            <Filter3 />

            <Calendar />
            <Filter4 />


            <SearchButton />
        </Container>
    );
}

export default Search;
