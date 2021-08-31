import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LinkWrapper } from './styles';

const HeaderMenu = () => {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/login">Login</Link>
        <Link to="/register">회원가입</Link>
      </LinkWrapper>
    </Container>
  );
};

export default HeaderMenu;
