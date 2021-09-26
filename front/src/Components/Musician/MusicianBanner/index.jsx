import React from 'react';
import { Container, Title, SubTitle } from './styles';

const MusicianBanner = () => {
  return (
    <Container>
      <Title>
        Artist
        <SubTitle>
          뮤직 펀딩은 아티스트가 창작에 몰두할 수 있도록 <br /> 음악 지원을 아끼지 않습니다.
        </SubTitle>
      </Title>
    </Container>
  );
};

export default MusicianBanner;
