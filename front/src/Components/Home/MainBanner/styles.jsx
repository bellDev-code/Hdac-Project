import styled from '@emotion/styled';
import BannerImg from '@Assets/Common/banner01.jpg';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 80%;
  padding: 35vh 0;
  background-image: url(${BannerImg});
  background-position: top;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15%;
  left: 60%;
`;

export const Title = styled.div`
  font-size: 60px;

  & > span {
    color: #d96846;
  }
`;

export const TitleTwo = styled.div`
  text-align: right;

  & > span {
    color: #d96846;
  }
`;

export const SubTitle = styled.div`
  font-size: 40px;
  padding-top: 20px;
`;
