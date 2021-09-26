import MusicianBanner from '@Components/Musician/MusicianBanner';
import MusicianList from '@Components/Musician/MusicianList';
import MusicianTitle from '@Components/Musician/MusicianTitle';
import React from 'react';
import { Container } from './styles';

const MusicianPage = () => {
  return (
    <Container>
      <MusicianBanner />
      <MusicianTitle />
      <MusicianList />
    </Container>
  );
};

export default MusicianPage;
