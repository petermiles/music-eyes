import React from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from 'appConstants/paths';
import classes from './Home.scss';

export const Home = () => (
  <div className={classes.root}>
    <Link to={routePaths.overview}>
      <div>
        Go to Overview
      </div>
    </Link>
  </div>
);

export default Home;
