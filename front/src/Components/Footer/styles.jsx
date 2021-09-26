import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 0 50px 50px 50px;
  background-color: #dee2e6;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  a:visited {
    color: #000;
  }

  & > :link {
    text-decoration: none;
    padding: 5px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  font-size: 12px;
`;

export const Contents = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const EmailLink = styled.div``;

export const Tell = styled.div``;

export const Business = styled.div``;

export const Address = styled.div``;
