import React, { Dispatch, SetStateAction, useEffect,  useRef, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import '../style.css'
import { useAuth } from "../../../../../auth/ContextProvider";
import { SearchModel } from "./model";

import RemoveICon from "../../icons/RemoveICon";



type CustomDropdownProps = {
    value: string | undefined | null;
    options: SearchModel[] | undefined;
    name: 'dep' | 'ret';

    onClick: (value: string) => void;
    children: React.ReactNode;
    focus: boolean;
    setFocus: Dispatch<SetStateAction<'dep' | 'ret'>>;
    setKeyword: Dispatch<SetStateAction<string | null>>;
    isFetching: boolean
};


const CustomDropdown: React.FC<CustomDropdownProps> = ({
    options,
    children,
    focus,
    setFocus,
    name,
    setKeyword,
    isFetching



}) => {
    const divRef: any = useRef(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef: any = useRef(null);
    const { updateFilter, filter } = useAuth();
    const [isEditable, setIsEditable] = React.useState<boolean>(true);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const handleContentChange = (event: React.FormEvent<HTMLDivElement>) => {
        setSearchTerm(event.currentTarget.innerText)
        // setKeyword('')
    };
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setKeyword(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])
    useEffect(() => {
        //  console.log(filter[name])
        //  alert(JSON.stringify(filter[name]?.name))
    }, [filter])
    const handleClickOutside = (event: any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !event.target.classList.contains("dropdown-option")
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            className=" relative flex-1 sm:min-w-fit w-100 "
            ref={dropdownRef}
        >

            {
                children
            }

            {isEditable && <div
                contentEditable={isEditable}
                ref={divRef}
                data-placeholder="المدينة او المطار"
                onFocus={() => {
                    setFocus(name)
                    setDropdownOpen(true)
                }}
                onBlur={
                    () => {
                        // setDropdownOpen(false)
                    }
                }
                className={`w-full  h-fit  ${focus ? 'bg-[#f1f1f1]  ' : 'bg-white'}  focus:bg-[#f1f1f1]  p-6  text-primary  text-xl   outline-none 
                   `}
                onInput={handleContentChange}            >



            </div>}
            {!isEditable && <div
                ref={divRef}
                className={`w-full  h-fit  ${focus ? 'bg-[#f1f1f1]  ' : 'bg-white'}  focus:bg-[#f1f1f1]  p-6  text-primary  text-xl   outline-none 
                   `}
            >
                {filter[name]?.address.countryName + '/' + filter[name]?.address.cityName}
               

            </div>}

            {!isEditable && <span className={`cursor-pointer absolute left-1 top-2 `} onClick={() => { setIsEditable((prev) => !prev) }}>
                <RemoveICon />
            </span>}



            {isDropdownOpen && (
                <div
                    className={' w-full h-fit min-h-[70px] max-h-[300px] overflow-auto   bg-white absolute bottom-0 left-0 z-50 border border-[#c5c5c5] cursor-pointer'}
                    style={{
                        top: `${divRef.current
                            .getBoundingClientRect()
                            ?.height.toFixed(0)}px`,
                    }}

                >
                    {isFetching && <div className="text-center p-8">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only text-secondary">Loading...</span>
                        </div>
                    </div>}
                    {!isFetching && (options && options.length > 0) ?
                        options.map((option) => {
                            return (
                                <button key={option.iataCode}
                                    className={' w-full p-3  text-[#b3b3b3] bg-white border-t hover:bg-secondary hover:text-white flex items-center justify-between '}
                                    onClick={() => {
                                        setIsEditable(false)
                                        updateFilter({ [name]: option })
                                        setDropdownOpen(false)
                                    }}
                                >


                                    <div className=" flex flex-col text-[12px]">
                                        <span>{option.name} </span>
                                        {/* <span> {countriesCode[option.address?.countryCode?.toLowerCase()]?.name}</span> */}
                                        <span> {option.address.countryName + '/' + option.address.cityName}</span>
                                    </div>
                                    <span className=" text-primary">{option.iataCode}</span>


                                </button>
                            )
                        }) :
                        <span className={`p-4 flex justify-center text-primary items-center ${isFetching ? " hidden" : ""}`}> لاتوجد نتائج </span>

                    }
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
