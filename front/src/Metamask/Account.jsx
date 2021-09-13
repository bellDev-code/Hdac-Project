import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from './Connector';
import metamask from '@Assets/Img/metamask.png';
import styled from '@emotion/styled';

function Account() {
  const { activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  console.log(useWeb3React());

  const MetaIcon = styled.img`
    padding-left: 20px;
    cursor: pointer;
  `;

  return (
    <div>
      {/* <div> Chain Id : {chainId}</div> */}
      {/* <div> Account : {account}</div> */}
      {active ? <MetaIcon src={metamask}></MetaIcon> : <MetaIcon src={metamask} onClick={onClick}></MetaIcon>}
    </div>
  );
}

export default Account;
