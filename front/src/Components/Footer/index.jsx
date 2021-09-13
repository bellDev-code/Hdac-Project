import React from 'react';
import { Container, LinkWrapper, ContentsWrapper, Contents, Tell, Business, Address, EmailLink } from './styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/">이용약관</Link>|<Link to="/">개인정보처리방침</Link>
      </LinkWrapper>
      <ContentsWrapper>
        <Contents>
          <EmailLink>이메일 : sumaoo20@naver.com</EmailLink>
          <Tell>전화 문의 : 1588 - 1234</Tell>
          <Business>사업자등록번호 : 110 - 10 - 11188</Business>
          <Address>서울시 영등포구 양평동 월드메디앙 4층 405호</Address>
        </Contents>
        <Contents>
          <Link>깃허브 주소</Link>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
};

export default Footer;
