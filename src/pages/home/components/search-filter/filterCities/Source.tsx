import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CustomDropdown from './CustomDropDown';
import { getCities } from '../../../../../service';
import PlanDown from '../../icons/PlanDown';

interface Props {
    focus: 'dep' | 'ret'

    setFocus: Dispatch<SetStateAction<'dep' | 'ret'>>;
}
const Source: React.FC<Props> = ({ focus, setFocus }) => {
    const [keyword, setKeyword] = useState<string | null>(null);
    const {
        isFetching,
        data: response,
    } = useQuery(
        `${'cities-return'}-${keyword}`,
        () => {
            return getCities(keyword || "");
        },
        {
            enabled: keyword != null && keyword.length > 2
        }

    )

    useEffect(() => {

    }, [response])
    return (
        <CustomDropdown options={response} isFetching={isFetching} value={''} setKeyword={setKeyword} name='ret' onClick={() => { }} focus={focus == 'ret'} setFocus={setFocus} >
            <span className=" absolute top-[4px] right-[18px]  text-[#ff56a1] text-sm flex gap-1 items-center">
                <PlanDown />
                <span>إلى</span>
            </span>
        </CustomDropdown>
    );
}

export default Source;
