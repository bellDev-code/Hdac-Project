import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  width: 100%;
  background-color: #d96846;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Logo = styled.div`
  align-items: center;
  padding: 0 0 0 50px;
  font-size: 38px;
  color: #fff;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > a {
    color: #fff;
    text-decoration: none;

    a:visited {
      color: #fff;
    }
  }
`;
