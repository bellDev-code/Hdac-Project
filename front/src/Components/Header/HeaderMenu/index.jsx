import React from 'react';
import { Link } from 'react-router-dom';
import Account from '@Components/Metamask/Account';
import { Container, LinkWrapper } from './styles';

const HeaderMenu = () => {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/login">Login</Link>
        <Link to="/register">회원가입</Link>
        <Account />
      </LinkWrapper>
    </Container>
  );
};

export default HeaderMenu;
