import React from 'react';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import { routePaths } from 'appConstants/paths';
import Home from '../Home';
import Authorization from '../Authorization';
import Overview from '../Overview';
import SongsOverview from '../Overview/routes/SongsOverview';

const Routes = () => (
  <Router>
    <>
      <div>
        <Link to={routePaths.auth}>
          <span>
            Reauthorize
          </span>
        </Link>
        <Link to={routePaths.base}>
          <span>
            Home
          </span>
        </Link>
      </div>
      <Route path={routePaths.base} exact component={Home} />
      <Route path={routePaths.auth} component={Authorization} />
      <Route path={routePaths.overview} component={Overview} />
      <Route path={routePaths.songsOverview} component={SongsOverview} />
    </>
  </Router>
);

export default Routes;
