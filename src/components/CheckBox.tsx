import { FC } from "react";
interface Props {
    children: React.ReactNode,
    checked: boolean,
    onClick: (value: string) => void,
    value:string

}
const CheckBox: FC<Props> = ({ children, onClick, checked ,value }) => {
    return (
        <div className="inline-flex items-center gap-4 ">

            <div className="relative flex items-center   cursor-pointer">
                <input
                    onClick={() =>
                        onClick(value)
                    }
                    type="checkbox"
                    className="before:content[''] peer  border-[#99cc66] relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#99cc66] checked:bg-[#99cc66] checked:before:bg-[#99cc66] hover:before:opacity-10"
                    id={`checkbox-${value}`}
                    checked={checked}
                />
                <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
            <label
                className="relative flex items-center cursor-pointer  "
                htmlFor={`checkbox-${value}`}
                data-ripple-dark="true"
            >
                <span>{children}</span>
            </label>





        </div >
    );
}

export default CheckBox;
