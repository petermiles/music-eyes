import React from 'react';
import Link from 'react-router-dom/Link';
import { routePaths } from 'appConstants/paths';
import classes from './Overview.module.scss';

export const Overview = () => (
  <div className={classes.root}>

    <Link to={routePaths.songsOverview}>
      <span
        className={classes.songOverviewButton}
      >
      Songs
      </span>
      <br />
      <span>
        Overview Component
      </span>
    </Link>
  </div>
);

export default Overview;
