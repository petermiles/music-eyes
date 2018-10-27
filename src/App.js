import React from 'react';
import Router from './routes';
import classes from './App.module.scss';

export const App = () => (
  <div className={classes.appRoot}>
    <Router />
  </div>
);

export default App;
