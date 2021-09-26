import MiddleBtn from '@Components/Button';
import LabelInput from '@Components/LabelInput';
import kakaoBtn from '@Assets/Img/kakao_login_medium_narrow.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AccountForm, LoginForm, ButtonWrapper, LinkWrapper, KakaoBtn } from './styles';

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
            <KakaoBtn src={kakaoBtn} />
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
