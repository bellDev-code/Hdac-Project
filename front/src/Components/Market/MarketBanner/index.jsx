import MarketBtn from '@Components/Button/marketBtn';
import React from 'react';
import { Container, Wrapper, ContentsImage, ContentsWrapper, Title, Contents } from './styles';

const MarketBanner = () => {
  return (
    <Container>
      <Wrapper>
        <ContentsImage></ContentsImage>
        <ContentsWrapper>
          <Title>Market Items</Title>
          <Contents>Contents Text</Contents>
          <MarketBtn name="펀딩 가기" />
        </ContentsWrapper>
      </Wrapper>
    </Container>
  );
};

export default MarketBanner;
