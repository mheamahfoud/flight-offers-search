import React from 'react';
import Icon from '../../../../assets/images/hotelLogo.png'
import styled from 'styled-components';
const Container = styled.div`
background: url(${Icon}) no-repeat 0 0;
    display: block;
    width: 28px;
    height: 28px;
   
`;

const HotelLogo: React.FC = () => {
  return (
    <Container>
      
    </Container>
  );
}

export default HotelLogo;
