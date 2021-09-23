import React from 'react';
import styled from '@emotion/styled';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Intro from '@Pages/Intro';

const Container = styled.section`
  font-family: 'Jua';
`;

const Company = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <Footer />
    </Container>
  );
};

export default Company;
