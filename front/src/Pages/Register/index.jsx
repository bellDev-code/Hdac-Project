import MiddleBtn from '@Components/Button/middleBtn';
import React from 'react';
import { Container, AccountForm, RegisterForm, InputWrapper, ButtonWrapper } from './styles';

const Register = () => {
  const RegisterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <AccountForm>
        <h3>Register</h3>
        <RegisterForm onsubmit={RegisterSubmit}>
          <InputWrapper>
            <label>email</label>
            <input type="email"></input>
          </InputWrapper>
          <InputWrapper>
            <label>이름</label>
            <input type="text"></input>
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호</label>
            <input type="password"></input>
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호 확인</label>
            <input type="password"></input>
          </InputWrapper>
          <ButtonWrapper>
            <MiddleBtn type="submit" />
          </ButtonWrapper>
        </RegisterForm>
      </AccountForm>
    </Container>
  );
};

export default Register;
