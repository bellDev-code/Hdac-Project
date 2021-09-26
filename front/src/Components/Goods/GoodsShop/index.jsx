import React from 'react';
import {
  Container,
  ListWrapper,
  GoodsWrapper,
  ImageWrapper,
  Wrapper,
  Image,
  TextWrapper,
  ContentsTitle,
  Contents,
  ButtonWrapper,
} from './styles';
import GoodsImage from '@Assets/Img/Goods/aespa-goods.jpg';
import GoodsImage02 from '@Assets/Img/Goods/lee-goods.jpg';
import GoodsImage03 from '@Assets/Img/Goods/weekend-goods.jpg';
import GoodsImage04 from '@Assets/Img/Goods/iu-goods.png';
import GoodsImage05 from '@Assets/Img/Goods/bts-goods.jpg';
import GoodsImage06 from '@Assets/Img/Goods/bts-goods-v.jpg';
import useScrollFadeIn from '@Hooks/useScrollFadeIn';
import { krwConvertor } from '@Utils/string';
import GoodsBtn from '@Components/Button/goodsBtn';

const GoodsItems = [
  {
    id: 0,
    url: `${GoodsImage}`,
    name: '에스파(aespa) - 포토카드',
    intro: '"에스파의 멤버별 포토카드"',
    price: 15000,
  },
  {
    id: 1,
    url: `${GoodsImage02}`,
    name: '이무진 - 포토카드',
    intro: '"이무진의 포토카드 5매"',
    price: 6000,
  },
  {
    id: 2,
    url: `${GoodsImage03}`,
    name: '태연 - 레트로 테잎',
    intro: '"태연의 레트로 테잎!"',
    price: 13000,
  },
  {
    id: 3,
    url: `${GoodsImage04}`,
    name: '아이유(IU) - LILAC Case',
    intro: '"IU의 LILAC Case!!"',
    price: 20000,
  },
  {
    id: 4,
    url: `${GoodsImage05}`,
    name: '대원앤북(BTS) - 퍼즐 앨범',
    intro: '"BTS의 300P 퍼즐 앨범"',
    price: 16000,
  },
  {
    id: 5,
    url: `${GoodsImage06}`,
    name: '대원앤북(BTS-뷔) - 108P 퍼즐 앨범',
    intro: '"방탄소년단 뷔의 108P 퍼즐 앨범"',
    price: 7800,
  },
];

const GoodsShop = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1, 0.1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    3: useScrollFadeIn('left', 1, 0.4),
    4: useScrollFadeIn('left', 1, 0.5),
    5: useScrollFadeIn('left', 1, 0.5),
  };

  return (
    <Container>
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
                  {krwConvertor(item.price)}
                  <ButtonWrapper>
                    <GoodsBtn name="결제하기" />
                  </ButtonWrapper>
                </TextWrapper>
              </GoodsWrapper>
            </Wrapper>
          );
        })}
      </ListWrapper>
    </Container>
  );
};

export default GoodsShop;
