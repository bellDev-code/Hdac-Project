import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 0;
  padding: 16px 35px;
`;

const middleBtn = () => {
  return <Button>Login</Button>;
};

export default middleBtn;
