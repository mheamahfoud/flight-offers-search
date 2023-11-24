
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';
import { useAuth } from '../../../../auth/ContextProvider';



const Filter3= () => {

    const { filter, updateFilter } = useAuth();
    const onChnage = (name: "adults" | "children" | "infants", process: "plus" | "minus") => {
        if (process == "plus") {
            updateFilter({ [name]: filter[name] + 1 })
        }
        else {
            if (name == 'adults') {
                updateFilter({ [name]: filter[name] > 1 ? filter[name] - 1 : 1 })
            }
            else {
                updateFilter({ [name]: filter[name] > 0 ? filter[name] - 1 : 0 })
            }


        }

    }


    return (
        <div className='w-2/5      h-fit  relative flex whitespace-nowrap bg-white ' >

            <div className='flex  gap-3 cursor-pointer px-6 py-3  border-l   flex-1  h-fit  relative  whitespace-nowrap  text-secondary  ' >


                <div className=' flex flex-col justify-center items-center gap-1 '>
                    <button onClick={() => onChnage("adults", "plus")}> <UpIcon /></button>

                    <button
                        onClick={() => onChnage("adults", "minus")}> <DownIcon /></button>

                </div>

                <div className=' flex flex-col justify-center items-center gap-2 text-xl'>

                    <span>بالغ</span>
                    <span className=' text-primary'>{filter?.adults}</span>

                </div>


            </div>
            <div className=' flex justify-center gap-2  border-l cursor-pointer p-3      flex-1  h-fit  relative  whitespace-nowrap   text-secondary  ' >

                <div className=' flex flex-col justify-center items-center gap-1 text-sm'>

                    <button onClick={() => onChnage("children", "plus")}> <UpIcon /></button>

                    <button
                        onClick={() => onChnage("children", "minus")}> <DownIcon /></button>

                </div>

                <div className=' flex flex-col justify-center items-center gap-2 text-xl'>

                    <span>طفل</span>
                    <span className=' text-primary'>{filter?.children}</span>

                </div>


            </div>
            <div className=' flex justify-center gap-2  cursor-pointer p-3     flex-1  h-fit  relative  whitespace-nowrap  text-secondary  ' >

                <div className=' flex flex-col justify-center items-center gap-1 text-sm'>
                    <button onClick={() => onChnage("infants", "plus")}> <UpIcon /></button>

                    <button
                        onClick={() => onChnage("infants", "minus")}> <DownIcon /></button>
                </div>

                <div className=' flex flex-col justify-center items-center gap-2 text-xl'>

                    <span>رضيع</span>
                    <span className=' text-primary'>{filter?.infants}</span>

                </div>

            </div>
        </div>
    );
}

export default Filter3;
