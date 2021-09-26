import styled from '@emotion/styled';
import Slider from 'react-slick';

export const Container = styled.section`
  padding: 50px 0;
`;

export const StyledCarousel = styled(Slider)`
  .slick-list {
    height: 40%;
  }

  .slick-slide div {
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
  display: flex;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  padding: 20px;
`;

export const MusicWrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  max-width: 250px;
  width: 100%;
`;

export const MusicianImg = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  margin-left: 30px;
`;

export const OneWrapper = styled.div`
  display: flex;
`;

export const MusicianName = styled.div`
  font-size: 35px;
`;

export const MusicianPosition = styled.div`
  display: flex;
  align-items: center;
  color: #adb5bd;
  padding-left: 20px;
`;

export const MusicianTitle = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const TwoWrapper = styled.div``;

export const MusicianInterview = styled.div``;
