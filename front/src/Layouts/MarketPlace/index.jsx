import React from 'react';
import styled from '@emotion/styled';
import Header from '@Components/Header';
import Market from '@Pages/Market';
import Footer from '@Components/Footer';

const Container = styled.section``;

const MarketPlace = () => {
  return (
    <Container>
      <Header />
      <Market />
      <Footer />
    </Container>
  );
};

export default MarketPlace;
