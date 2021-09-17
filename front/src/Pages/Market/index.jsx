import MusicList from '@Components/Home/MusicList';
import MarketBanner from '@Components/Market/MarketBanner';

import React from 'react';
import { Container } from './styles';

const Market = () => {
  return (
    <Container>
      <MarketBanner />
      <MusicList />
    </Container>
  );
};

export default Market;
