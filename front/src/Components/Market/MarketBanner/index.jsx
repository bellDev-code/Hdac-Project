import MarketBtn from '@Components/Button/marketBtn';
import React, { useContext, useMemo } from 'react';
import { Container, Wrapper, ContentsImage, ContentsWrapper, Title, Contents, Image } from './styles';
import Timer from '@Components/Timer';
import { MusicContext } from '@Hooks/useMusicContext';

const MarketBanner = () => {
  const { selected, fundingList } = useContext(MusicContext);

  const item = useMemo(() => {
    return fundingList.find((e) => e.id === selected);
  }, [selected]);

  if (!item) {
    return null;
  }

  const timerRender = useMemo(() => {
    return <Timer expireTime={item.exp} />;
  }, [item]);

  return (
    <Container>
      <Wrapper>
        <ContentsImage>
          <Image src={item.url} />
        </ContentsImage>
        <ContentsWrapper>
          <Title>{item.name}</Title>
          <Contents>{item.artist}</Contents>
          {timerRender}
          <MarketBtn name="펀딩 가기" />
        </ContentsWrapper>
      </Wrapper>
    </Container>
  );
};

export default MarketBanner;
