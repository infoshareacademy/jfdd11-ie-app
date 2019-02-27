import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home";
import SignIn from "../SignIn";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Main-Container">
          <Route path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
