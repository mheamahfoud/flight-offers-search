import styled from 'styled-components'
import blockquteIcon from '../../../assets/images/blockquote.png';
import tringleIcon from '../../../assets/images/testimoni-sparator.png'
import cleint1Icon from '../../../assets/images/Foodics.png';
import cleint2Icon from '../../../assets/images/virgin-mobile.png';
import cleint3Icon from '../../../assets/images/cleints/OM.png'
const Container = styled.div`
  margin-bottom: 100px;
`;

const ItemWrapper = styled.div`
  
    
   
`;
const ItemContainer = styled.div`
 display: block;
    position: relative;
    background: #f9f9f9;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    padding: 30px 25px 10px 25px;
    height: 250px;
    width: 350px;
`;
const Item = styled.blockquote`
background: url(${blockquteIcon}) no-repeat 0 0; 
    background-position: top right;
    padding: 0 50px 0 10px;
    border: 0;
`;

const Trinagle = styled.span`
background: url(${tringleIcon}) no-repeat 0 0;
    display: block;
    position: absolute;
    width: 48px;
    height: 22px;
    z-index: 2;
    bottom: -22px;
    right: 15px;
`;
interface CleintProps {
    icon: string;
}
const Cleint = styled.span<CleintProps>`
   background: url(${(props) => props.icon}) ;
    height: 50px;
    width: 50px;
    display: inline-block;
    margin: 18px;
    background-size: contain;
    background-repeat: no-repeat;
`;

const UserExperince = () => {
    return (
        <Container className=' flex  flex-col  gap-8  px-52 pt-6'>
            <h2 className=' text-primary text-center text-4xl'>تجارب المستخدمين</h2>
            <ItemWrapper className='flex gap-8'>
                <div>
                    <ItemContainer className=''>
                        <Item className='  text-primary text-lg'>صارت حياتي أسهل مع فلاي أكيد. كنا نستعمل وكالات السفر بس مع فلاي أكيد أقدر استقبل الطلبات بشكل مباشر بدل ما يستنى الموظف يوم أو يومين إلى ما تجيهم الموافقة على السفر. - فودكس</Item>
                        <Trinagle />

                    </ItemContainer>
                    <Cleint icon={cleint1Icon} />
                </div>
                <div>
                    <ItemContainer className=''>
                        <Item className='  text-primary text-lg'>

                            سابقًا كنا نعمل على عمليات ورقية لموافقات السفر والتواصل عن طريق الايميل مع وكلاؤنا. كانت العملية تأخذ وقت طويل وما كان عندنا مراقبة كاملة على اجراءات السفر لكن الآن مع فلاي أكيد الموضوع شفاف عن طريق المنصة. -يعرب الصايغ، فيرجن موبايل                    </Item>
                        <Trinagle />
                    </ItemContainer>
                    <Cleint  icon={cleint2Icon} />
                </div>
                <div>
                    <ItemContainer className=''>
                        <Item className='  text-primary text-lg'>
                            كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع                    </Item>
                        <Trinagle />
                    </ItemContainer>
                    <Cleint  icon={cleint3Icon} />
                </div>
            </ItemWrapper>


        </Container>
    );
}

export default UserExperince;
