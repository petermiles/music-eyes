import React from 'react';
import logo from './logo.svg';
import Router from './routes';
import './App.scss';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Router />
    </header>
  </div>
);

export default App;
