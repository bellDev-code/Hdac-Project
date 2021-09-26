import styled from '@emotion/styled';

import bannerUrl from '@Assets/Img/musician-banner01.jpg';

export const Container = styled.section`
  background-image: url(${bannerUrl});
  min-height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 40px;
  margin: 0;
  color: #fff;
  top: 35%;
  left: 5%;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-size: 25px;
  opacity: 0.8;
`;
