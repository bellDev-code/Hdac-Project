import React from 'react';
import { Container, Title, ArtistWrapper, Wrapper, StyledCarousel, Contents, ImageWrapper, Image } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImageUrl from '@Assets/Img/Artist/aespa.jpg';
import ImageUrl01 from '@Assets/Img/Artist/bts.jpg';
import ImageUrl02 from '@Assets/Img/Artist/lee.jpg';
import ImageUrl03 from '@Assets/Img/Artist/redvelvet.jpg';
import ImageUrl04 from '@Assets/Img/Artist/tae.jpg';

const items = [
  {
    id: 1,
    url: `${ImageUrl}`,
    name: '에스파(aespa)',
  },
  {
    id: 2,
    url: `${ImageUrl01}`,
    name: '방탄소년단(BTS)',
  },
  {
    id: 3,
    url: `${ImageUrl02}`,
    name: '이무진',
  },
  {
    id: 4,
    url: `${ImageUrl03}`,
    name: '레드벨벳(RedVelvet)',
  },
  {
    id: 5,
    url: `${ImageUrl04}`,
    name: '태연',
  },
];

const Artist = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <Container>
      <Title>Artist</Title>
      <ArtistWrapper>
        <StyledCarousel {...settings}>
          {items.map((item, index) => {
            return (
              <Wrapper key={index}>
                <ImageWrapper>
                  <Image src={item.url} />
                </ImageWrapper>
                <Contents>{item.name}</Contents>
              </Wrapper>
            );
          })}
        </StyledCarousel>
      </ArtistWrapper>
    </Container>
  );
};

export default Artist;
