import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Logo = styled.img`
     width: 165px;
     height: 35px; 
    display: inline-block;
    margin: 0;
    background-size: contain;
    background-repeat: no-repeat;
   
`;



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex  justify-between items-center h-[90px] bg-primary w-100 py-4  px-40 cursor-pointer sticky top-0 z-50 " onClick={()=>navigate('/')}>
            <Logo src={logo} />


            <div className=' flex gap-3'>
                <button className=' w-[120px]  bg-secondary text-center  text-white text-sm  border-[1px] py-2 px-4 border-none h-fit'>
                    الشركات
                </button>
                <button className=' w-[120px]  bg-white  text-center  text-secondary text-sm border-[1px] py-2 px-4 border-none h-fit '>
                    تسجيل الدخول
                </button>
            </div>



        </div>
    );
}

export default Navbar;
