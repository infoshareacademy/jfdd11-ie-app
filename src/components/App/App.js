import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FAQ from '../FAQ'
import Home from "../Home";
import SignIn from "../SignIn";



class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="Main-Container">
      <Route exact path="/" component={Home} /> 
      <Route exact path="/faq" component={FAQ}/>  
      <Route exact path="/signin" component={SignIn} />

        </div>
      </Router>
      </>
    );
  }
}

export default App;
