
import CheckBox from '../../../components/CheckBox';
import PriceLessICon from '../../../assets/images/less-price.png';
import PriceMoreICon from '../../../assets/images/more-price.png';
const FlightsPrice = () => {
    return (
        <div className='border-b border-t border-[#a6caff] py-4 gap-2  flex flex-col'>
            <div className=' flex justify-between items-center'>
                <h6 className=" text-secondary text-lg">الرحلات</h6>
                {/* <span className=' text-center inline-block underline cursor-pointer text-[#38bca8]'>تحديد الكل</span> */}

            </div>

            <CheckBox checked={true} value={'1'} onClick={() => { }} >
                <span className=' flex items-center gap-2 '>
                    <img src={PriceLessICon} className='mix-blend-darken w-[40px] h-[34px]'></img>
                    <span>
                        الأقل سعرا

                    </span>
                </span>
            </CheckBox>
            <CheckBox checked={true} value={'1'} onClick={() => { }} >
                <span className=' flex items-center gap-2'>
                    <img src={PriceMoreICon} className='mix-blend-darken w-[40px] h-[34px]'></img>
                    <span>
                        اختر

                    </span>
                </span>
            </CheckBox>

     




        </div >
    );
}

export default FlightsPrice;
