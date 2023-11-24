
import styled from 'styled-components'
import Img from '../../../assets/images/phone-landing-page.png'
const Container = styled.div`
 margin-bottom: 100px;
`;

const Left = styled.div`
 
`;

const Right = styled.div`
 background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    width: 500px;
    height: 300px;
`;


const FleightExperince = () => {
    return (
        <Container className='flex  gap-8  px-52 pt-6 '>
            <Left className=' flex flex-col gap-6 ustify-center items-center py-10'>
                <h2 className='  text-center text-4xl'>التجربة السلسة لسفر الشركات
                </h2>
                <p >فلاي أكيد هو حل سفر متكامل للشركات يقدم منتجات سفر للشركات وموظفيها ليجمع ما بين أفضل تجارب الحجوزات للموظفين وأفضل تجربة لإدارة حلول السفر بالكامل.</p>

            </Left>

            <Right>

            </Right>

        </Container>
    );
}

export default FleightExperince;
