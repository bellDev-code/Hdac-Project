import React from 'react';
import { useHistory } from 'react-router';
import HeaderMenu from './HeaderMenu';
import { Container, LogoWrapper, MenuWrapper, MenuButton } from './styles';

const Header = () => {
  const history = useHistory();

  const goMarket = () => {
    history.push('/marketplace');
  };
  return (
    <Container>
      <LogoWrapper></LogoWrapper>
      <MenuWrapper>
        <MenuButton>COMPANY</MenuButton>
        <MenuButton>MUSIC</MenuButton>
        <MenuButton>ARTIST</MenuButton>
        <MenuButton onClick={goMarket}>MARKET PLACE</MenuButton>
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
