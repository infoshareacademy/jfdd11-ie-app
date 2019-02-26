import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FAQ from '../FAQ'
import Home from "../Home";



class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="Main-Container">
      <Route path="/faq" component={FAQ}/>  
      <Route path="/" component={Home} /> 
        </div>
      </Router>
      </>
    );
  }
}

export default App;
