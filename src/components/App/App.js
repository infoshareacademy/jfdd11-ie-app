import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Offerts from '../Offerts';
import Offert from '../Offert';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/offerts" component={Offerts} />
      <Route path="/offerts/:offertId" component={Offert} />
      </div>

      </Router>
    );
  }
}

export default App;
