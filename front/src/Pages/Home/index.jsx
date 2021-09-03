import Artist from '@Components/Home/Artist';
import MainBanner from '@Components/Home/MainBanner';
import MusicList from '@Components/Home/MusicList';
import React from 'react';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <MainBanner />
      <Artist />
      <MusicList />
    </Container>
  );
};

export default Home;
