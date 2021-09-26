import useScrollClipPath from '@Hooks/useScrollClipPath';
import React from 'react';
import { Container, Wrapper, TitleWrapper, Them, Title, Text } from './styles';

const MusicianTitle = () => {
  const animated = useScrollClipPath();
  return (
    <Container>
      <Wrapper {...animated}>
        <TitleWrapper>
          <Them>ARTIST</Them>
          <Title>함께하는 아티스트</Title>
          <Text>
            K-POP 혁신 생태계(NFT)를 위해 음악 소유권 <br /> 공유 문화를 선도해주시는 아티스트입니다.
          </Text>
        </TitleWrapper>
      </Wrapper>
    </Container>
  );
};

export default MusicianTitle;
