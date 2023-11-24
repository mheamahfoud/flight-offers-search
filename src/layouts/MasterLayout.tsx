import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';



const MasterLayout= () => {
    return (
        <div  className=' flex flex-col flex-grow'>
            <Navbar />

            <div className='wrapper-content flex-grow'>
                <Outlet />
            </div>




            <Footer />

        </div>
    );
}

export default MasterLayout;
