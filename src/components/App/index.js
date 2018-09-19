import React, { Component } from 'react';

import './App.css';
import { Routes } from '../Routes';
import Fetch from '../../containers/Fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch />
        <Routes />
      </div>
    );
  }
}

export default App;
