import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Login from '@Pages/Login';
import Register from '@Pages/Register';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
