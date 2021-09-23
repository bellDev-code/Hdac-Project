import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import { Container, LogoWrapper, Logo, MenuWrapper, Wrapper } from './styles';

const menuList = [
  {
    name: 'COMPANY',
    url: '/company',
  },
  {
    name: 'MUSIC',
    url: '/music',
  },
  {
    name: 'ARTIST',
    url: '/artist',
  },
  {
    name: 'MARKET PLACE',
    url: '/marketplace',
  },
];

const Header = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };
  return (
    <Container>
      <LogoWrapper onClick={goHome}>
        <Logo>MU:FUN</Logo>
      </LogoWrapper>
      <MenuWrapper>
        {menuList.map((item, index) => {
          return (
            <Wrapper key={index}>
              <Link to={item.url}>{item.name}</Link>
            </Wrapper>
          );
        })}
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
