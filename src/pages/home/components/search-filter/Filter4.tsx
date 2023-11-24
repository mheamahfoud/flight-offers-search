import  { useState } from 'react';


const Filter4= () => {
    const [state, setState] = useState<"tour" | "jobs" | "first">("tour");
    return (
        <div className='w-2/5      h-fit  relative flex whitespace-nowrap bg-white ' >

            <div onClick={()=>setState("tour")} className={`flex justify-center gap-2 cursor-pointer p-4  border-l   flex-1  h-fit  relative  whitespace-nowrap  ${state == 'tour' ? "bg-secondary   text-white " : "hover:bg-[#f1f1f1]"} `} >

                <span>السياحية</span>


            </div>
            <div onClick={()=>setState("jobs")}  className={`flex justify-center gap-2  cursor-pointer p-4   border-l    flex-1  h-fit  relative  whitespace-nowrap ${state == 'jobs' ? "bg-secondary   text-white " : "hover:bg-[#f1f1f1]"}  `} >

                <span>الأعمال</span>


            </div>
            <div onClick={()=>setState("first")} className={`flex justify-center gap-2  cursor-pointer p-4     flex-1  h-fit  relative  whitespace-nowrap  ${state == 'first' ? "bg-secondary   text-white " : "hover:bg-[#f1f1f1]"} `} >

                <span>الأولى</span>

            </div>
        </div>
    );
}

export default Filter4;
