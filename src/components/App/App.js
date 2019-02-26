import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyAccount from '../MyAccount';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        

        <Route path="/myAccount" component={MyAccount} />
      </div>
      </Router>
    );
  }
}

export default App;
