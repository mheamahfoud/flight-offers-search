import { useState } from 'react';

import Destination from './Destination';
import Source from './Source';
import ChangeIcon from '../../icons/ChangeIcon';
import styled from 'styled-components';
import { useAuth } from '../../../../../auth/ContextProvider';
const Container = styled.div``;

const SelectFilter = () => {
    const [focus, setFocus] = useState<'dep' | 'ret'>('dep');
    const { changeDtae } = useAuth();

    return (
        <Container className='w-2/5  bg-white flex flex-col gap-0 relative'>


            <Destination focus={focus} setFocus={setFocus} />


            <div className=' absolute left-2 top-1/2 z-50 translate-y-[-50%] cursor-pointer bg-white' onClick={() => changeDtae()}>
                <ChangeIcon />
            </div>


            <Source focus={focus} setFocus={setFocus} />
        </Container>
    );
}

export default SelectFilter;
