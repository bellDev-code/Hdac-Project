import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from './Connector';

function Account() {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <div>
      <div> Chain Id : {chainId}</div>
      <div> Account : {account}</div>
      {active ? <div>Connected</div> : <button onClick={onClick}>Connect</button>}
    </div>
  );
}

export default Account;
