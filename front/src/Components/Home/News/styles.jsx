import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 50px 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 35px;
  padding-left: 20px;
`;

export const NewsList = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
`;

export const ItemArea = styled.div`
  border-top: 1px solid #dee2e6;
  display: flex;
`;

export const ThumbWrapper = styled.div`
  padding: 10px;
`;

export const Thumbnail = styled.img`
  width: 180px;
  height: 180px;
`;

export const ContentsWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const ContentsTitle = styled.div`
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const ConText = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 350px;
  color: #495057;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
