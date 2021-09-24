import React from 'react';
import {
  Container,
  TextWrapper,
  TeamWrapper,
  Name,
  Title,
  SubTitle,
  Wrapper,
  ImageWrapper,
  TeamImage,
  TeamName,
  TextArea,
  TeamPosition,
} from './styles';
import useScrollFadeIn from '@Hooks/useScrollFadeIn';

import TeamImg01 from '@Assets/Img/Team/team01.png';
import TeamImg02 from '@Assets/Img/Team/team02.png';
import TeamImg03 from '@Assets/Img/Team/team03.png';

const TeamList = [
  {
    id: 0,
    url: `${TeamImg01}`,
    name: '이종호',
    position: 'Front-End',
  },
  {
    id: 1,
    url: `${TeamImg02}`,
    name: '정완규',
    position: 'Back-End',
  },
  {
    id: 2,
    url: `${TeamImg03}`,
    name: '김기현',
    position: 'BlockChain',
  },
  {
    id: 3,
    url: `${TeamImg03}`,
    name: '김혜인',
    position: 'planning',
  },
];

const TeamIntro = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1, 0.1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    3: useScrollFadeIn('left', 1, 0.4),
  };
  return (
    <Container>
      <TextWrapper>
        <Name>TEAM</Name>
        <Title>세계 최초 음원 NFT 소유권</Title>
        <SubTitle>
          내가 좋아하는 음원을 소유한다. <br />
          좋아하는 아티스트와 공유 <br />
          소유권으로 증명하는 나의 팬심
        </SubTitle>
      </TextWrapper>
      <TeamWrapper>
        {TeamList.map((item, index) => {
          return (
            <Wrapper key={index} {...animatedItem[index]}>
              <ImageWrapper>
                <TeamImage src={item.url}></TeamImage>
              </ImageWrapper>
              <TextArea>
                <TeamName>{item.name}</TeamName>
                <TeamPosition>{item.position}</TeamPosition>
              </TextArea>
            </Wrapper>
          );
        })}
      </TeamWrapper>
    </Container>
  );
};

export default TeamIntro;
