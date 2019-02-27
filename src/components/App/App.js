import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyAccount from '../MyAccount';
import FAQ from '../FAQ'
import Home from "../Home";



class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="Main-Container">
      <Route exact path="/faq" component={FAQ}/>  
      <Route exact path="/" component={Home} /> 
      <Route exact path="/myAccount" component={MyAccount} />
        </div>
      </Router>
      </>
    );
  }
}

export default App;
