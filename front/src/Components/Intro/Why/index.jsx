import PercentCount from '@Components/PercentCount';
import React from 'react';
import {
  Container,
  TextWrapper,
  CountWrapper,
  Title,
  SubTitle,
  Wrapper,
  CountTitle,
  CountSubTitle,
  TitleWrapper,
  PercentWrapper,
} from './styles';

const countItems = [
  {
    id: 0,
    title: '소유권 거래 수익률',
    subtitle: '20년-21년 기대수익률',
    goal: 24,
    unit: '%',
  },
  {
    id: 0,
    title: '회원 증가율',
    subtitle: '20년-21년 회원 증가율',
    goal: 120,
    unit: '%',
  },
];

const WhyFunding = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          매일 듣던 음악이 <br />
          NFT를 만나 소유권이 된다.
        </Title>
        <SubTitle>
          아티스트와 함께 소유하는 음원으로 <br />
          나의 팬심을 증명한다. <br />
          소유권 거래로 수익도 얻을 수 있습니다.
        </SubTitle>
      </TextWrapper>
      <CountWrapper>
        {countItems.map((item, index) => {
          return (
            <Wrapper key={index}>
              <TitleWrapper>
                <CountTitle>{item.title}</CountTitle>
                <CountSubTitle>{item.subtitle}</CountSubTitle>
              </TitleWrapper>
              <PercentWrapper>
                <PercentCount item={item} />
                <div>{item.unit}</div>
              </PercentWrapper>
            </Wrapper>
          );
        })}
      </CountWrapper>
    </Container>
  );
};

export default WhyFunding;
