import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  cursor: pointer;
  background-color: #d96846;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 0;
  padding: 16px 25px;
  font-family: 'Jua';
`;

const goodsBtn = ({ name }) => {
  return <Button>{name}</Button>;
};

goodsBtn.PropTypes = {
  name: PropTypes.string,
};

export default goodsBtn;
