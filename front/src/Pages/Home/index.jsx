import Artist from '@Components/Home/Artist';
import MainBanner from '@Components/Home/MainBanner';
import React from 'react';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <MainBanner />
      <Artist />
    </Container>
  );
};

export default Home;
