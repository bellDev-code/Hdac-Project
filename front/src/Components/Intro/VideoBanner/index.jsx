import React from 'react';
import BannerVD from '@Assets/Video/banner-video.mp4';
import { VideoWrapper, BannerTitle, Title, SubTitle } from './styles';

const VideoBanner = () => {
  return (
    <VideoWrapper>
      <BannerTitle>
        <Title></Title>
        <SubTitle></SubTitle>
      </BannerTitle>
      <video autoPlay muted loop width="100%" height="100%">
        <source src={BannerVD} type="video/mp4" />
      </video>
    </VideoWrapper>
  );
};

export default VideoBanner;
