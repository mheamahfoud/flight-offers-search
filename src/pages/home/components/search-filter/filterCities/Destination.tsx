import React, { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';
import CustomDropdown from './CustomDropDown';
import PlanUp from '../../icons/PlanUp';
import { getCities } from '../../../../../service';



interface Props {
    focus: 'dep' | 'ret'

    setFocus: Dispatch<SetStateAction<'dep' | 'ret'>>;
}


const Destination: React.FC<Props> = ({ focus, setFocus }) => {

    const [keyword, setKeyword] = useState<string | null>(null);
    const {
        isFetching,
   
        data: response,
    } = useQuery(
        `${'cities-dest'} - ${keyword}`,
        () => {
            return getCities(keyword || "");
        },
        {
            enabled: keyword != null && keyword.length > 2
        }

    )

    return (
        <CustomDropdown options={response} isFetching={isFetching} value={''} setKeyword={setKeyword} name='dep' onClick={() => { }} focus={focus == 'dep'} setFocus={setFocus} >
            <span className=" absolute top-[4px] right-[18px]  text-[#ff56a1] text-sm flex gap-1 items-center">
                <PlanUp />
                <span>من</span>
            </span>
        </CustomDropdown>
    );
}

export default Destination;
