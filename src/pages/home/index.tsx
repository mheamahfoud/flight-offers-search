import React from 'react';
import UserExperince from './components/UserExperince';
import styled from 'styled-components';
import FleightExperince from './components/FleightExperince';
import Cleints from './components/Cleints';
import AppStore from './components/AppStore';
import Search from './components/Search';
const Container = styled.div``;
interface Props {

}
//@ts-ignore
const HomePage: React.FC<Props> = (props) => {

    return (
        <Container className=' flex flex-col'>
            <Search />
            <FleightExperince />
            <Cleints />
            <UserExperince />
            <AppStore />
        </Container>
    );
}

export default HomePage;
