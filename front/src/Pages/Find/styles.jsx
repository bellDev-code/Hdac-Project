import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const AccountForm = styled.div`
  box-shadow: 0px 0px 7px 5px rgb(0 0 0 / 15%);
  padding: 30px 40px;
  background: #fff;
  width: 50%;
  & > h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
`;

export const FindForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    padding: 10px 15px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: auto;
`;
