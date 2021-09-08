import React from 'react';
import { CardWrapper, Wrapper, ImageWrapper, CardImage, TextWrapper, CardInfo, CardFunding, CardDay } from './styles';

import AlbumImage from '@Assets/Img/MusicList/music01.jpg';
import AlbumImage02 from '@Assets/Img/MusicList/music02.jpg';
import AlbumImage03 from '@Assets/Img/MusicList/music03.jpg';

const CardData = [
  {
    id: 1,
    url: `${AlbumImage}`,
    name: 'LILAC',
    artist: 'IU(아이유)',
    achieved: '3,000원',
    goal: '8,000,000원',
    exp: '20일',
  },
  {
    id: 2,
    url: `${AlbumImage02}`,
    name: 'NEXT LEVEL',
    artist: 'Aespa(에스파)',
    achieved: '7,000원',
    goal: '9,000,000원',
    exp: '30일',
  },
  {
    id: 3,
    url: `${AlbumImage03}`,
    name: 'THE ALBUM',
    artist: 'BlackPink(블랙핑크)',
    achieved: '10,000,000원',
    goal: '10,000,000원',
    exp: '13일',
  },
];

const MusicCard = () => {
  return (
    <CardWrapper>
      {CardData.map((item, index) => {
        return (
          <Wrapper key={index}>
            <ImageWrapper>
              <CardImage src={item.url}></CardImage>
            </ImageWrapper>
            <TextWrapper>
              <CardInfo>
                {item.name}
                {item.artist}
              </CardInfo>
              <CardFunding>
                {item.achieved}/{item.goal}
              </CardFunding>
              <CardDay>{item.exp}</CardDay>
            </TextWrapper>
          </Wrapper>
        );
      })}
    </CardWrapper>
  );
};

export default MusicCard;
