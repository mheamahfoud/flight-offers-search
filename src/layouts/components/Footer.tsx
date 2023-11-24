import logo from '../../assets/images/ar-logo-footer.png'
import styled from 'styled-components';

const Container = styled.div`
  gap: 100px;
`
const Top = styled.div``;
const Bottom = styled.div``
const Logo = styled.img`
     width: 118px;
     height: 35px; 
    display: inline-block;
    margin: 0;
    background-size: contain;
    background-repeat: no-repeat;
    
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
 
`;



const Footer = () => {
    return (
        <Container className=" flex flex-col bg-white  w-100  px-52 py-8 ">
            <Top className='w-full flex gap-4 justify-between'>
                <Logo  src={logo}/>
                <Info className=' flex  justify-between w-[calc(50%)]'>
                    <div className=' flex flex-col gap-3 text-primary'>
                        <span className='  font-400'>FlyAkeed</span>
                        <div className='flex flex-col gap-2'>
                            <a className='text-sm' href=''>من نحن</a>
                            <a className='text-sm' href=''>فلاي أكيد أعمال</a>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3 text-primary'>
                        <span className='  font-400'>الدعم</span>
                        <div className='flex flex-col gap-2'>
                            <a className='text-sm' href=''>تواصل معنا </a>
                            <a className='text-sm' href=''>الاسئلة الشائعة</a>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3 text-primary'>
                        <span className='  font-400'>الأمور القانونية</span>
                        <div className='flex flex-col gap-2'>
                            <a className='text-sm' href=''>الشروط والأحكام</a>
                            <a className='text-sm' href=''>شروط الخصوصية</a>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3 text-primary'>
                        <span className='  font-400'>Download</span>
                        <div className='flex flex-col gap-2'>
                            <a className='text-sm' href=''>من نحن</a>
                            <a className='text-sm' href=''>فلاي أكيد أعمال</a>
                        </div>
                    </div>
                </Info>
            </Top>
            <Bottom className='w-full flex justify-between'>
                <div className=' flex gap-2'>
                    <span >اتصل بنا</span>
                    <span >
                        920000091
                    </span>
                </div>
                <div className='w-[calc(50%)]'>
                    <p className='text-center'>جميع الحقوق محفوظة لموقع وتطبيق فلاي أكيد © 2023.</p>
                </div>


            </Bottom>



        </Container >
    );
}

export default Footer;
