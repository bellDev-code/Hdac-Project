import React from 'react';
import HeaderMenu from './HeaderMenu';
import { Container, LogoWrapper, MenuWrapper, MenuButton } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoWrapper></LogoWrapper>
      <MenuWrapper>
        <MenuButton>회사소개</MenuButton>
        <MenuButton>MUSIC</MenuButton>
        <MenuButton>ARTIST</MenuButton>
        <MenuButton>투자 가이드</MenuButton>
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
