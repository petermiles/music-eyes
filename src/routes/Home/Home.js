import React from 'react';
import PropTypes from 'prop-types';
import classes from './Home.scss'

export const Home = ({ home }) => (
  <div className={classes.root}>
    <span>Home Component</span>
    <pre>{JSON.stringify(home, null, 2)}</pre>
  </div>
)

Home.propTypes = {
  home: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Home
