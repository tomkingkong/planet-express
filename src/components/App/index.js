import React, { Component } from 'react';

import './App.css';
import { PageContentRoute } from '../PageContentRoute';
import { NavRoute } from '../NavRoute';
import Fetch from '../../containers/Fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch />
        <NavRoute />
        <PageContentRoute />
      </div>
    );
  }
}

export default App;
