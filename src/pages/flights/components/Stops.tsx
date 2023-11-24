
import CheckBox from '../../../components/CheckBox';

const Stops = () => {
    return (
        <div className='border-b border-t border-[#a6caff] py-4 gap-2  flex flex-col'>
            <div className=' flex justify-between items-center'>
                <h6 className=" text-secondary text-lg">توقف</h6>
                {/* <span className=' text-center inline-block underline cursor-pointer text-[#38bca8]'>تحديد الكل</span> */}

            </div>

            <CheckBox checked={true} value={'1'} onClick={() => { }} >رحلة مباشرة</CheckBox>

            <CheckBox checked={true}  value='0' onClick={() => { }} >
                توقف

            </CheckBox>




        </div >
    );
}

export default Stops;
