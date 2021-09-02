import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import GetLibrary from '@Metamask/Library';
import Main from './Main';
import Login from '@Pages/Login';
import Register from '@Pages/Register';
import Find from '@Pages/Find';

const App = () => {
  return (
    <Web3Provider getLibrary={GetLibrary}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/find" component={Find} />
        </Switch>
      </BrowserRouter>
    </Web3Provider>
  );
};

export default App;
