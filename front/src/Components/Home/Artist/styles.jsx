import styled from '@emotion/styled';
import Slider from 'react-slick';

export const Container = styled.section`
  padding-top: 50px;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin: 0;
  padding-left: 20px;
`;

export const ArtistWrapper = styled.div``;

export const StyledCarousel = styled(Slider)`
  .slick-list {
    height: 50%;
  }

  .slick-slide div {
    width: 100%;
    outline: none;
    overflow: hidden;
  }

  .slick-slide {
    height: 50%;
  }

  .slick-prev {
    left: 30px;
  }

  .slick-next {
    right: 30px;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  padding: 0 16px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10%;
`;

export const Contents = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.div``;
