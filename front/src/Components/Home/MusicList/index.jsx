import React from 'react';
import MusicCard from '../MusicCard';
import { Container, Title, ListWrapper } from './styles';

const MusicList = () => {
  return (
    <Container>
      <Title>Music List</Title>
      <ListWrapper>
        <MusicCard />
      </ListWrapper>
    </Container>
  );
};

export default MusicList;
