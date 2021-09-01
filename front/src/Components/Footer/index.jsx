import React from 'react';
import { Container, LinkWrapper, ContentsWrapper, Contents } from './styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/">이용약관</Link>|<Link to="/">개인정보처리방침</Link>
      </LinkWrapper>
      <ContentsWrapper>
        <Contents>Footer section One</Contents>
        <Contents>Footer section Two</Contents>
      </ContentsWrapper>
    </Container>
  );
};

export default Footer;
