import React from 'react';
import HeaderMenu from './HeaderMenu';
import { Container, LogoWrapper, MenuWrapper, MenuButton } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoWrapper></LogoWrapper>
      <MenuWrapper>
        <MenuButton>COMPANY</MenuButton>
        <MenuButton>MUSIC</MenuButton>
        <MenuButton>ARTIST</MenuButton>
        <MenuButton>MARKET PLACE</MenuButton>
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
