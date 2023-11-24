import { useState } from "react";


const Filter2 = () => {
    const [state, setState] = useState<"multi" | "one" | "binding">("binding");
    return (
        <div className='w-2/5 rounded-[50px]  px-2 py-1   h-fit  relative flex whitespace-nowrap bg-white gap-2' >

            <button  onClick={()=>setState("one")}  className={`flex justify-center gap-2 cursor-pointer p-1   flex-1 rounded-[50px]  h-fit  relative  whitespace-nowrap  ${state == 'one' ? 'bg-secondary text-white' : 'bg-white'} `} >

                <span>ذهاب فقط</span>


            </button>
            <button onClick={()=>setState("binding")}   className={`flex justify-center gap-2  cursor-pointer    p-1   flex-1 rounded-[50px] h-fit  relative   ${state == 'binding' ? 'bg-secondary text-white' : 'bg-white'}  whitespace-nowrap `} >

                <span>ذهاب وعودة</span>


            </button>
            <button onClick={()=>setState("multi")}  className={`flex justify-center gap-2  cursor-pointer    p-1   flex-1 rounded-[50px] h-fit  relative  ${state == 'multi' ? 'bg-secondary text-white' : 'bg-white'}  whitespace-nowrap`} >

                <span>وجهات متعددة</span>

            </button>
        </div>
    );
}

export default Filter2;
