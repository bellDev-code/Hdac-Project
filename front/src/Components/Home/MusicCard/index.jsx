import React from 'react';
import { CardWrapper, Wrapper, ImageWrapper, CardImage, TextWrapper, CardInfo, CardDay } from './styles';

import AlbumImage01 from '@Assets/Img/MusicList/music03.jpg';
import AlbumImage02 from '@Assets/Img/MusicList/aespa-album.jpg';
import AlbumImage03 from '@Assets/Img/MusicList/butter.jpg';
import AlbumImage04 from '@Assets/Img/MusicList/qeendom.jpg';
import AlbumImage05 from '@Assets/Img/MusicList/sinho.jpg';
import AlbumImage06 from '@Assets/Img/MusicList/weekend.jpg';
import useScrollFadeIn from '@Hooks/useScrollFadeIn';
import FundingPrice from '@Components/FundingPrice';

const CardData = [
  {
    id: 0,
    url: `${AlbumImage06}`,
    name: 'WEEKEND',
    artist: '태연',
    achieved: 3000,
    goal: 8000000,
    exp: '20일',
  },
  {
    id: 1,
    url: `${AlbumImage01}`,
    name: 'THE ALBUM',
    artist: '블랙핑크(BlackPink)',
    achieved: 7000,
    goal: 9000000,
    exp: '30일',
  },
  {
    id: 2,
    url: `${AlbumImage03}`,
    name: 'BUTTER',
    artist: '방탄소년단(BTS)',
    achieved: 10000000,
    goal: 10000000,
    exp: '13일',
  },
  {
    id: 3,
    url: `${AlbumImage04}`,
    name: 'QUEENDOM',
    artist: '레드벨벳(RED VELVET)',
    achieved: 3000,
    goal: 8000000,
    exp: '20일',
  },
  {
    id: 4,
    url: `${AlbumImage02}`,
    name: 'NEXT LEVEL',
    artist: 'Aespa(에스파)',
    achieved: 7000,
    goal: 9000000,
    exp: '30일',
  },
  {
    id: 5,
    url: `${AlbumImage05}`,
    name: '신호등',
    artist: '이무진',
    achieved: 10000000,
    goal: 10000000,
    exp: '13일',
  },
];

const MusicCard = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
    5: useScrollFadeIn('up', 1, 0.6),
  };
  return (
    <CardWrapper>
      {CardData.map((item, index) => {
        return (
          <Wrapper key={index} {...animatedItem[index]}>
            <ImageWrapper>
              <CardImage src={item.url}></CardImage>
            </ImageWrapper>
            <TextWrapper>
              <CardInfo>
                {item.name} - {item.artist}
              </CardInfo>
              <FundingPrice item={item} />
              <CardDay>D-Day {item.exp}</CardDay>
            </TextWrapper>
          </Wrapper>
        );
      })}
    </CardWrapper>
  );
};

export default MusicCard;
