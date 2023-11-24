
import styled from 'styled-components'
import Img from '../../../assets/images/flyakeed_landing_phone.svg';
const Container = styled.div`
 margin-bottom: 100px;
 position: relative;
`;
const Right = styled.div` position: relative;`;
const Image = styled.div`
position: absolute;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    width: 470px;
    height: 650px;
    left: 0;
    bottom: 50px;
`;

const Left = styled.div``;


const AppStore = () => {
    return (
        <Container className='flex  gap-8  px-60 pt-6 bg-[#e7f0fe]  h-[500px] mt-20'>
            <Right className=' w-1/3'>
                <Image/>

            </Right>
            <Left className=' w-2/3 flex  items-center'>
                <h2 className=' text-white text-4xl' >Book Flights Anytime, Anywhere with the Convenience of Our Downloadable App</h2>
            </Left>
        </Container>
    );
}

export default AppStore;
