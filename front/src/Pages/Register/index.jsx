import MiddleBtn from '@Components/Button';
import LabelInput from '@Components/LabelInput';
import React from 'react';
import { Container, AccountForm, RegisterForm, ButtonWrapper } from './styles';

const Register = () => {
  const RegisterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <AccountForm>
        <h3>Register</h3>
        <RegisterForm onsubmit={RegisterSubmit}>
          <LabelInput name="username" />
          <LabelInput name="name" />
          <LabelInput name="password" type="password" />
          <LabelInput name="passwordConfirm" type="password" />
          <ButtonWrapper>
            <MiddleBtn name="Register" type="submit" />
          </ButtonWrapper>
        </RegisterForm>
      </AccountForm>
    </Container>
  );
};

export default Register;
