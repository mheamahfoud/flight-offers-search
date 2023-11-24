
import styled from 'styled-components'
import cleint1Icon from '../../../assets/images/cleints/Alibab-Cloud.png';
import cleint2Icon from '../../../assets/images/cleints/OM.png';
import cleint3Icon from '../../../assets/images/cleints/Stc-Group.png';

import cleint4Icon from '../../../assets/images/cleints/NEOM.png';
import cleint5Icon from '../../../assets/images/cleints/Jock-Club.png';
import cleint6Icon from '../../../assets/images/cleints/Knowliom.png'
const Container = styled.div`
  margin-bottom: 100px;
`;

const Top = styled.div`
 
`;

const Bottom = styled.div`
 
`;
interface CleintProps {
    icon: string;
}
const Icon = styled.span<CleintProps>`
   background: url(${(props) => props.icon}) ;
    background-position: center;
    width: 170px;
    height: 100.7px;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
`;
const Cleints = () => {
    return (
        <Container className='flex flex-col  gap-8  px-52 pt-6 '>
            <Top>
                <h1 className=' text-2xl text-center' >Join the Elite Ranks of the Most Impressive Companies Trusting Us</h1>
            </Top>
            <Bottom className=' flex flex-wrap gap-2'>
                <Icon  icon={cleint1Icon}/>
                <Icon icon={cleint2Icon} />
                <Icon icon={cleint3Icon} />
                <Icon  icon={cleint4Icon}/>
                <Icon icon={cleint5Icon} />
                <Icon  icon={cleint6Icon}/>
            </Bottom>

        </Container>
    );
}

export default Cleints;
