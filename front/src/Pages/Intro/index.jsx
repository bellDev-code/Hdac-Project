import TeamIntro from '@Components/Intro/TeamIntro';
import VideoBanner from '@Components/Intro/VideoBanner';
import WhyFunding from '@Components/Intro/Why';
import React from 'react';
import { Container } from './styles';

const Intro = () => {
  return (
    <Container>
      <VideoBanner />
      <TeamIntro />
      <WhyFunding />
    </Container>
  );
};

export default Intro;
