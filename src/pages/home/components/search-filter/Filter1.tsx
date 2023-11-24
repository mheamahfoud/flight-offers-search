import HotelLogo from '../icons/HotelLogo';
import BookFlightIcon from '../icons/BookFlight';
import { useState } from 'react';

const Filter1 = () => {
    const [state, setState] = useState<"flight" | "hotel">("flight");
    return (
        <div className='w-2/5 rounded-[50px]  px-2 py-1   h-fit  relative flex whitespace-nowrap bg-white gap-2' >

            <div onClick={() => setState("flight")} className={`flex justify-center gap-2 cursor-pointer p-1   flex-1 rounded-[50px]  h-fit  relative  whitespace-nowrap  ${state == 'flight' ? "bg-secondary   text-white" : ""} `} >

                <span>الرحلات</span>
                <BookFlightIcon />

            </div>
            <div onClick={() => setState("hotel")} className={` flex justify-center gap-2  cursor-pointer    p-1   flex-1 rounded-[50px] h-fit  relative  whitespace-nowrap  ${state == 'hotel' ? "bg-secondary  text-white" : ""} `} >

                <span>الفنادق</span>
                <HotelLogo />

            </div>
        </div>
    );
}

export default Filter1;
