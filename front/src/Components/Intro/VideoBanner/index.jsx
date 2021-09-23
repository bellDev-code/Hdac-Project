import React from 'react';
import BannerVD from '@Assets/Video/banner-video.mp4';
import { VideoWrapper, BannerTitle, Title, SubTitle } from './styles';

const VideoBanner = () => {
  return (
    <VideoWrapper>
      <BannerTitle>
        <Title>음악이 더 재밌어지는 방법,</Title>
        <SubTitle>1000원으로 음악을 소유하다</SubTitle>
      </BannerTitle>
      <video autoPlay muted loop width="100%" height="100%">
        <source src={BannerVD} type="video/mp4" />
      </video>
    </VideoWrapper>
  );
};

export default VideoBanner;
