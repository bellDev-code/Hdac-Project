import React from 'react';
import HeaderMenu from './Menu';
import { Container, LogoWrapper, MenuWrapper, MenuButton } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoWrapper>로고</LogoWrapper>
      <MenuWrapper>
        <MenuButton>회사소개</MenuButton>
        <MenuButton>음원</MenuButton>
        <MenuButton>투자전략</MenuButton>
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
