import MiddleBtn from '@Components/Button';
import LabelInput from '@Components/LabelInput';
import React from 'react';
import { Container, AccountForm, FindForm, ButtonWrapper } from './styles';

const Find = () => {
  const FindSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <AccountForm>
        <h3>Find Password</h3>
        <FindForm onSubmit={FindSubmit}>
          <LabelInput type="email" name="email" />
          <ButtonWrapper>
            <MiddleBtn name="find" type="submit" />
          </ButtonWrapper>
        </FindForm>
      </AccountForm>
    </Container>
  );
};

export default Find;
