import React from 'react';
import { Container, Title, ArtistWrapper, StyledCarousel, Contents, ImageWrapper, Image, Text } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageUrl from '@Assets/Img/Artist/artist.jpg';

const items = [
  {
    id: 1,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
  {
    id: 2,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
  {
    id: 3,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
  {
    id: 4,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
  {
    id: 5,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
  {
    id: 6,
    url: `${ImageUrl}`,
    name: 'Artist Name',
  },
];

const Artist = () => {
  const settings = {
    dots: true,
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
              <div key={index}>
                <ImageWrapper>
                  <Image src={item.url} />
                </ImageWrapper>
                <Contents>{item.name}</Contents>
                <Text>{item.text}</Text>
              </div>
            );
          })}
        </StyledCarousel>
      </ArtistWrapper>
    </Container>
  );
};

export default Artist;
