import React from 'react';
import styled from '@emotion/styled';
import Header from '@Components/Header';
import Home from '@Pages/Home/';
import Footer from '@Components/Footer';

const Container = styled.section`
  font-family: 'Jua';
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
};

export default Main;
