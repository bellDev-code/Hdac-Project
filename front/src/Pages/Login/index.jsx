import MiddleBtn from '@Components/Button';
import LabelInput from '@Components/LabelInput';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AccountForm, LoginForm, ButtonWrapper, LinkWrapper } from './styles';

const Login = () => {
  const LoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <AccountForm>
        <h3>Login</h3>
        <LoginForm onSubmit={LoginSubmit}>
          <LabelInput name="username" />
          <LabelInput name="password" type="password" />
          <ButtonWrapper>
            <MiddleBtn name="Login" type="submit" />
          </ButtonWrapper>
          <LinkWrapper>
            <Link to="/register">Create Your Account?</Link>
            <Link to="/find">Find Your Username?</Link>
          </LinkWrapper>
        </LoginForm>
      </AccountForm>
    </Container>
  );
};

export default Login;
