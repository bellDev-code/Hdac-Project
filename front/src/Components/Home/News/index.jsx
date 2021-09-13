import React from 'react';
import {
  Container,
  Title,
  NewsList,
  Wrapper,
  ItemArea,
  ThumbWrapper,
  Thumbnail,
  ContentsWrapper,
  ContentsTitle,
  ConText,
} from './styles';
import thumnImage from '@Assets/Img/News/thumbnail01.jpg';
import { useHistory } from 'react-router';

const NewsItems = [
  {
    id: 0,
    url: `${thumnImage}`,
    title: '설현 인스타그램으로 공개한 일상!',
    contents:
      '2021년 9월 11일 설현의 인스타그램에서 공개한 사진이 화제이다. 싱그러운 일상을 담은 설현의 셀카에 많은 사람들은 "이쁘다", "완전 여신이다." 등 많은 반응이 있었습니다. ',
  },
  {
    id: 1,
    url: `${thumnImage}`,
    title: '설현 인스타그램으로 공개한 일상!',
    contents: '2021년 9월 11일 설현의 인스타그램에서 공개한 사진이 화제이다.',
  },
];

const News = () => {
  const history = useHistory();

  const onClickToNews = () => {
    history.push('/');
  };
  return (
    <Container>
      <Title>NEWS</Title>
      <NewsList>
        {NewsItems.map((item, index) => {
          return (
            <Wrapper key={index}>
              <ItemArea>
                <ThumbWrapper>
                  <Thumbnail src={item.url}></Thumbnail>
                </ThumbWrapper>
                <ContentsWrapper>
                  <ContentsTitle onClick={onClickToNews}>{item.title}</ContentsTitle>
                  <ConText onClick={onClickToNews}>{item.contents}</ConText>
                </ContentsWrapper>
              </ItemArea>
            </Wrapper>
          );
        })}
      </NewsList>
    </Container>
  );
};

export default News;
