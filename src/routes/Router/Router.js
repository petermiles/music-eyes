import React from 'react';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import { routePaths } from 'appConstants/paths';
import Home from '../Home';
import Authorization from '../Authorization';
import Overview from '../Overview';

const Routes = () => (
  <Router>
    <>
      <Link to={routePaths.auth}>
      Reauthorize
      </Link>
      <Route path={routePaths.base} exact component={Home} />
      <Route path={routePaths.auth} component={Authorization} />
      <Route path={routePaths.overview} component={Overview} />
    </>
  </Router>
);

export default Routes;
