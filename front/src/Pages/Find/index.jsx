import MiddleBtn from '@Components/Button/middleBtn';
import React from 'react';
import { Container, AccountForm, FindForm, InputWrapper, ButtonWrapper } from './styles';

const Find = () => {
  const FindSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <AccountForm>
        <h3>Find Password</h3>
        <FindForm onSubmit={FindSubmit}>
          <InputWrapper>
            <label>email</label>
            <input type="email"></input>
          </InputWrapper>
          <ButtonWrapper>
            <MiddleBtn type="submit" />
          </ButtonWrapper>
        </FindForm>
      </AccountForm>
    </Container>
  );
};

export default Find;
