import TeamIntro from '@Components/Intro/TeamIntro';
import VideoBanner from '@Components/Intro/VideoBanner';
import React from 'react';
import { Container } from './styles';

const Intro = () => {
  return (
    <Container>
      <VideoBanner />
      <TeamIntro />
    </Container>
  );
};

export default Intro;
