import MarketBtn from '@Components/Button/marketBtn';
import React from 'react';
import { Container, Wrapper, ContentsImage, ContentsWrapper, Title, Contents, Image } from './styles';

import BannerImage from '@Assets/Img/MusicList/weekend.jpg';
import Timer from '@Components/Timer';

const MarketBanner = () => {
  return (
    <Container>
      <Wrapper>
        <ContentsImage>
          <Image src={BannerImage} />
        </ContentsImage>
        <ContentsWrapper>
          <Title>Market Items</Title>
          <Contents>Contents Text</Contents>
          <Timer />
          <MarketBtn name="펀딩 가기" />
        </ContentsWrapper>
      </Wrapper>
    </Container>
  );
};

export default MarketBanner;
