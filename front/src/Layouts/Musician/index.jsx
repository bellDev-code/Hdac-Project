import React from 'react';
import styled from '@emotion/styled';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import MusicianPage from '@Pages/Musician';

const Container = styled.section`
  font-family: 'Jua';
`;

const Musician = () => {
  return (
    <Container>
      <Header />
      <MusicianPage />
      <Footer />
    </Container>
  );
};

export default Musician;
