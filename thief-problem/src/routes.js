import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sculptures from './pages/Sculptures';
import Results from './pages/Results';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sculptures/:id" component={Sculptures} />
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
