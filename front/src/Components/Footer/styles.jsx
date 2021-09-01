import styled from '@emotion/styled';

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
  justify-content: center;
`;
