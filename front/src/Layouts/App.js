import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import GetLibrary from '@Components/Metamask/Library';
import Main from './Main';
import Login from '@Pages/Login';
import Register from '@Pages/Register';
import Find from '@Pages/Find';
import MarketPlace from './MarketPlace';

const App = () => {
  return (
    <Web3ReactProvider getLibrary={GetLibrary}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/find" component={Find} />
          <Route path="/marketplace" component={MarketPlace} />
        </Switch>
      </BrowserRouter>
    </Web3ReactProvider>
  );
};

export default App;
