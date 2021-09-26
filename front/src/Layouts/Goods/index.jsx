import React from 'react';
import styled from '@emotion/styled';
import Header from '@Components/Header';
import GoodsPage from '@Pages/GoodsPage';
import Footer from '@Components/Footer';

const Container = styled.section`
  font-family: 'Jua';
`;

const Goods = () => {
  return (
    <Container>
      <Header />
      <GoodsPage />
      <Footer />
    </Container>
  );
};

export default Goods;
