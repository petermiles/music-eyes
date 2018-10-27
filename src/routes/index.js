import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Authorization from './Authorization';

const Routes = props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Authorization} />
    </Switch>
  </Router>
);

export default Routes;
