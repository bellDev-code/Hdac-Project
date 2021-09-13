import Artist from '@Components/Home/Artist';
import GoodsList from '@Components/Home/Goods';
import MainBanner from '@Components/Home/MainBanner';
import MusicList from '@Components/Home/MusicList';
import News from '@Components/Home/News';
import React from 'react';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <MainBanner />
      <Artist />
      <MusicList />
      <GoodsList />
      <News />
    </Container>
  );
};

export default Home;
