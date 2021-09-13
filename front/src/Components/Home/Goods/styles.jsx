import styled from '@emotion/styled';

export const Container = styled.section``;

export const Title = styled.h1`
  font-size: 35px;
  margin: 0;
  padding-left: 20px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const Wrapper = styled.div`
  width: 30%;
`;

export const GoodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;

  :hover {
    border: 1px solid #dee2e6;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const ContentsTitle = styled.div`
  padding-bottom: 10px;
  font-size: 1.3rem;
`;

export const Contents = styled.div`
  padding-bottom: 10px;
`;
