import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  min-height: 30vh;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  & > :link {
    text-decoration: none;
    padding: 5px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const EmailLink = styled(Link)``;

export const Tell = styled.div``;

export const Business = styled.div``;

export const Address = styled.div``;
