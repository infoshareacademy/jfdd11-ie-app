import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Offerts from '../Offerts';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/offerts" component={Offerts} />
      </div>

      </Router>
    );
  }
}

export default App;
