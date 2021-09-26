import { MusicContext } from '@Hooks/useMusicContext';
import useScrollFadeIn from '@Hooks/useScrollFadeIn';
import React, { useContext } from 'react';
import MusicCard from '../MusicCard';
import { CardWrapper } from '../MusicCard/styles';
import { Container, Title, ListWrapper } from './styles';

const MusicList = () => {
  const { fundingList } = useContext(MusicContext);

  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
    5: useScrollFadeIn('up', 1, 0.6),
  };

  return (
    <Container>
      <Title>FUNDING LIST</Title>
      <ListWrapper>
        <CardWrapper>
          {fundingList.map((item, index) => {
            return <MusicCard key={item.id} item={item} animatedItem={animatedItem[index]} />;
          })}
        </CardWrapper>
      </ListWrapper>
    </Container>
  );
};

export default MusicList;
