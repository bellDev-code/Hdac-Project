import MiddleBtn from '@Components/Button/middleBtn';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AccountForm, LoginForm, ButtonWrapper } from './styles';

const Login = () => {
  const LoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <AccountForm>
        <h3>Login</h3>
        <LoginForm onSubmit={LoginSubmit}>
          <label>e-mail</label>
          <input type="email" />
          <label>password</label>
          <input type="password" />
          <ButtonWrapper>
            <MiddleBtn type="submit" />
          </ButtonWrapper>
          <Link to="/register" style={{ paddingTop: '20px' }}>
            Create Your Account?
          </Link>
          <Link to="/find">Find Your Username?</Link>
        </LoginForm>
      </AccountForm>
    </Container>
  );
};

export default Login;
