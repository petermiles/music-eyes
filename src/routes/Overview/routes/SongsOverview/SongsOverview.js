import React, { PropTypes } from 'react';
import classes from './SongsOverview.scss';

export const SongsOverview = ({ songsOverview }) => (
  <div className={classes.root}>
    <span>SongsOverview Component</span>
    <pre>{JSON.stringify(songsOverview, null, 2)}</pre>
  </div>
);

SongsOverview.propTypes = {
  songsOverview: PropTypes.object, // from enhancer (firestoreConnect + connect)
};

export default SongsOverview;
