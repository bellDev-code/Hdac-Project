import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const LinkWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  & > :link {
    text-decoration: none;
    padding: 5px;
  }
`;
