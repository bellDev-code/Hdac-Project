import React from 'react';
import { Container, Title, TitleTwo, Wrapper, SubTitle } from './styles';

const MainBanner = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          MU:SIC <TitleTwo>FUN:DING</TitleTwo>
        </Title>
        <SubTitle>
          국내 최초 블록체인
          <br />
          NFT를 활용한 소유권 펀딩!
        </SubTitle>
      </Wrapper>
    </Container>
  );
};

export default MainBanner;
