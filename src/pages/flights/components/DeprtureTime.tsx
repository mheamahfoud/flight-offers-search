
import CheckBox from '../../../components/CheckBox';
import DateTImeICon from '../../../assets/images/date-time.png';
import styled from 'styled-components';
import { DepartureEnum, DepartureType, useListView } from '../core/QueryListViewProvider';

const ImageContainer = styled.span`
    background-image: url(${DateTImeICon});
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 24px;
    margin: 0 5px;
`;
const DepartureTime = () => {

    const { onDepartureTime , departureTimes } = useListView();
    return (
        <div className='border-b border-t border-[#a6caff] py-4 gap-2  flex flex-col'>
            <div className=' flex justify-between items-center'>
                <h6 className=" text-secondary text-lg">وقت المغادرة
                </h6>
                {/* <span className=' text-center inline-block underline cursor-pointer text-[#38bca8]'>تحديد الكل</span> */}

            </div>
            

            <CheckBox checked={Object.values(departureTimes).includes(DepartureEnum.MIDNIGHT_TO_5AM)} value={'1'} onClick={() => onDepartureTime(DepartureEnum.MIDNIGHT_TO_5AM)} >
                <span className=' flex items-center gap-2 '>
                    {/* <img src={PriceLessICon} className='mix-blend-darken w-[35px] h-[34px]'></img> */}
                    <ImageContainer />
                    <span className='text-sm'>
                        12:00 MN - 4:59 AM

                    </span>
                </span>
            </CheckBox>
            <CheckBox checked={Object.values(departureTimes).includes(DepartureEnum.FIVE_AM_TO_NOON)} value={'1'} onClick={() => onDepartureTime(DepartureEnum.FIVE_AM_TO_NOON)} >
                <span className=' flex items-center gap-2'>
                    <ImageContainer style={{ backgroundPosition: '-32px 0' }} />
                    <span className='text-sm'>
                        05:00 AM - 11:59 AM

                    </span>
                </span>
            </CheckBox>
            <CheckBox checked={Object.values(departureTimes).includes(DepartureEnum.NOON_TO_5PM)} value={'1'} onClick={() => onDepartureTime(DepartureType.NOON_TO_5PM)} >
                <span className=' flex items-center gap-2'>
                    <ImageContainer style={{ backgroundPosition: '-64px 0' }} />
                    <span className='text-sm'>
                        12:00 NN - 4:59 PM

                    </span>
                </span>
            </CheckBox>
            <CheckBox checked={Object.values(departureTimes).includes(DepartureEnum.FIVE_PM_TO_MIDNIGHT)} value={'1'} onClick={() => onDepartureTime(DepartureType.FIVE_PM_TO_MIDNIGHT)} >
                <span className=' flex items-center gap-2'>
                    <ImageContainer style={{ backgroundPosition: '-96px 0' }} />
                    <span className='text-sm'>
                        05:00 PM - 11:59 PM

                    </span>
                </span>
            </CheckBox>





        </div >
    );
}

export default DepartureTime;
