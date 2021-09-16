import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  font-family: 'Jua';
`;

const middleBtn = ({ name }) => {
  return <Button>{name}</Button>;
};

middleBtn.PropTypes = {
  name: PropTypes.string,
};

export default middleBtn;
