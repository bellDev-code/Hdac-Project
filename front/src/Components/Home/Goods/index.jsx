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
import GoodsImage from '@Assets/Img/Goods/goods01.jpg';

const GoodsItems = [
  {
    id: 1,
    url: `${GoodsImage}`,
    name: 'BTS(뷔) - 자전거',
    intro: '"뷔가 사용했던 자전거"',
  },
  {
    id: 2,
    url: `${GoodsImage}`,
    name: 'IU(아이유) - 자전거',
    intro: '"아이유가 사용했던 자전거"',
  },
  {
    id: 3,
    url: `${GoodsImage}`,
    name: '카리나(에스파) - 자전거',
    intro: '"카리나가 사용했던 자전거"',
  },
];

const GoodsList = () => {
  return (
    <Container>
      <Title>GOODS</Title>
      <ListWrapper>
        {GoodsItems.map((item, index) => {
          return (
            <Wrapper key={index}>
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
