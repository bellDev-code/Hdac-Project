import React from 'react';
import {
  Container,
  Title,
  ListWrapper,
  GoodsWrapper,
  ImageWrapper,
  Wrapper,
  Image,
  TextWrapper,
  ContentsTitle,
  Contents,
} from './styles';
import GoodsImage from '@Assets/Img/Goods/aespa-goods.jpg';
import GoodsImage02 from '@Assets/Img/Goods/lee-goods.jpg';
import GoodsImage03 from '@Assets/Img/Goods/weekend-goods.jpg';
import useScrollFadeIn from '@Hooks/useScrollFadeIn';

const GoodsItems = [
  {
    id: 0,
    url: `${GoodsImage}`,
    name: '에스파(aespa) - Goods',
    intro: '"에스파의 Goods를 구매해보세요"',
  },
  {
    id: 1,
    url: `${GoodsImage02}`,
    name: '이무진 - Goods',
    intro: '"이무진의 Goods를 구매해보세요"',
  },
  {
    id: 2,
    url: `${GoodsImage03}`,
    name: '태연 - Goods',
    intro: '"태연의 Goods를 구매해보세요"',
  },
];

const GoodsList = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1, 0.1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
  };

  return (
    <Container>
      <Title>GOODS</Title>
      <ListWrapper>
        {GoodsItems.map((item, index) => {
          return (
            <Wrapper key={index} {...animatedItem[index]}>
              <GoodsWrapper>
                <ImageWrapper>
                  <Image src={item.url}></Image>
                </ImageWrapper>
                <TextWrapper>
                  <ContentsTitle>{item.name}</ContentsTitle>
                  <Contents>{item.intro}</Contents>
                </TextWrapper>
              </GoodsWrapper>
            </Wrapper>
          );
        })}
      </ListWrapper>
    </Container>
  );
};

export default GoodsList;
