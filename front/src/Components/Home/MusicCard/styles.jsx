import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f8f9fa;
  cursor: pointer;

  :hover {
    background-color: #f1f3f5;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  padding: 0 16px;
  flex: 1;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  width: 50%;
  text-align: center;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  padding: 10px 0;
`;

export const CardFunding = styled.div`
  padding: 10px 0;
`;

export const CardDay = styled.div`
  padding: 10px 0;
`;
