import  { useState } from 'react';
import Datepicker from "tailwind-datepicker-react"
import LeftIcon from '../icons/LeftIcon';
import RightIcon from '../icons/RightIcon';
import './style.css'
import { useAuth } from '../../../../auth/ContextProvider';
import RemoveICon from '../icons/RemoveICon';
import moment from 'moment';
import AddICon from '../icons/AddIcon';

// Function to increase date by one week
function increaseDateByOneWeek(inputDate: string): Date {
    //  if (!inputDate) return new Date();
    // Parse the input date in "yyyy-mm-dd" format
    const inputDateObj = inputDate ? new Date(inputDate) : new Date();

    // Increase the date by one week (7 days)
    inputDateObj.setDate(inputDateObj.getDate() + 7);

    // Format the new date to "yyyy-mm-dd" format
    // const newDateStr = inputDateObj.toISOString().split('T')[0];

    return inputDateObj;
}

const orgOptions = {
    autoHide: false,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    minDate: new Date(),
    theme: {
        color: "bg-red-500",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        //disabledText: "bg-red-500",
        input: "",
        inputIcon: "",

        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <LeftIcon />,
        next: () => <RightIcon />,
    },
    datepickerClassNames: "top-12",

    language: "ar",
    disabledDates: [],
}



const Calendar = () => {
    const [showDep, setShowDep] = useState<boolean>(false)
    const [showRet, setShowRet] = useState<boolean>(false)
    const [showRetDate, setShowRetDate] = useState<boolean>(false)
    const { updateFilter, filter } = useAuth();

    const optionsDep  :any= {
        ...orgOptions,
        title: <div className=' flex justify-between items-center'><span>اختر تاريخ المغادرة</span>

            <span className=' cursor-pointer' onClick={() => setShowDep((prev) => !prev)}>
                <RemoveICon />
            </span></div>,
        defaultDate: new Date(),

    }
    const optionsRet : any = {
        ...orgOptions,
        title: <div className=' flex justify-between items-center'><span>اختر تاريخ العودة</span>
            <span className=' cursor-pointer' onClick={() => setShowRet((prev) => !prev)}>
                <RemoveICon />
            </span></div>,



    }

    const handleChange = (selectedDate: Date) => {
        updateFilter({ departureDate: moment(selectedDate).format('YYYY-MM-DD') })
    }
    const handleChangeRet = (selectedDate: Date) => {
        updateFilter({ returnDate: moment(selectedDate).format('YYYY-MM-DD') })
    }

    const handleCloseDep = (state: boolean) => {
        setShowDep(state)
    }


    const handleCloseRet = (state: boolean) => {
        setShowRet(state)
    }


    return (
        <div className='w-2/5   relative flex gap-3' >
            <div className='flex-1 px-4 py-2 bg-white flex flex-col gap-2 hover:bg-[#f1f1f1] cursor-pointer'>
                <span className=' text-secondary'>
                    تاريخ المغادرة
                </span>
                <div className=' flex  gap-2  items-center  justify-between'>


                    <span className=' text-primary'>

                        <Datepicker
                          
                        classNames='wwwwwwwwww'
                         value={filter.departureDate ? new Date(filter.departureDate) : new Date()}
                         options={optionsDep} onChange={handleChange} show={showDep} setShow={handleCloseDep}

                        />
                    </span>
                </div>
            </div>
            <div className=' flex-1  gap-1 bg-white flex justify-center items-center '>
                {!showRetDate && <div className=' w-full h-full gap-1 bg-white flex justify-center items-center hover:bg-[#f1f1f1]'>
                    <button onClick={() => {
                        setShowRetDate(true)
                        setShowRet(true)
                    }}>
                        <AddICon />
                    </button>
                    <span className=' text-secondary' >
                        أضف تاريخ العودة
                    </span>
                </div>}

                {showRetDate && <div className=' w-full h-full bg-white  hover:bg-[#f1f1f1] flex flex-col gap-2  px-4 py-2'>

                    <span className=' absolute left-2 top-2 cursor-pointer' onClick={() => setShowRetDate((prev) => !prev)}>
                        <RemoveICon />
                    </span>
                    <span className=' text-secondary'>
                        تاريخ العودة
                    </span>
                    <div className=' flex  gap-2  items-center  justify-between '>

                        {/* <h1 className=' text-primary text-4xl'>
                            06
                        </h1> */}
                        <span className=' text-primary'>

                            <Datepicker classNames='wwwwwwwwww' value={filter.returnDate ? new Date(filter.returnDate) : increaseDateByOneWeek(filter.departureDate || "")} options={optionsRet} onChange={handleChangeRet} show={showRet} setShow={handleCloseRet}

                            />
                        </span>
                    </div>
                </div>}


            </div>

        </div>
    );
}

export default Calendar;
