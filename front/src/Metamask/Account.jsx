import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from './Connector';
import metamask from '@Assets/img/metamask.png';
import styled from '@emotion/styled';

function Account() {
  const { activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  const MetaButton = styled.button`
    border: 0;
    background-color: #fff;
    cursor: pointer;
  `;

  const MetaIcon = styled.img`
    padding-left: 20px;
  `;

  return (
    <div>
      {/* <div> Chain Id : {chainId}</div> */}
      {/* <div> Account : {account}</div> */}
      {active ? <MetaIcon src={metamask}></MetaIcon> : <MetaButton onClick={onClick}>메타마스크 연결하기</MetaButton>}
    </div>
  );
}

export default Account;
