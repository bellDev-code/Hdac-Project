import MarketBanner from '@Components/Market/MarketBanner';
import RecentFunding from '@Components/Market/RecentFunding';
import React from 'react';
import { Container } from './styles';

const Market = () => {
  return (
    <Container>
      <MarketBanner />
      <RecentFunding />
    </Container>
  );
};

export default Market;
