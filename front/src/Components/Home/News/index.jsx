import React from 'react';
import {
  Container,
  Title,
  NewsList,
  Wrapper,
  ThumbWrapper,
  Thumbnail,
  ContentsWrapper,
  ContentsTitle,
  ConText,
} from './styles';

import thumnImage from '@Assets/Img/News/thumbnail01.jpg';

const NewsItems = [
  {
    id: 1,
    url: `${thumnImage}`,
    title: '설현 인스타그램으로 공개한 일상!',
    contents: '2021년 9월 11일 설현의 인스타그램에서 공개한 사진이 화제이다.',
  },
];

const News = () => {
  return (
    <Container>
      <Title>NEWS</Title>
      <NewsList>
        {NewsItems.map((item, index) => {
          return (
            <Wrapper key={index}>
              <ThumbWrapper>
                <Thumbnail src={item.url}></Thumbnail>
              </ThumbWrapper>
              <ContentsWrapper>
                <ContentsTitle>{item.title}</ContentsTitle>
                <ConText>{item.contents}</ConText>
              </ContentsWrapper>
            </Wrapper>
          );
        })}
      </NewsList>
    </Container>
  );
};

export default News;
