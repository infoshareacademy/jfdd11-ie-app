import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyAccount from '../MyAccount';
import FAQ from '../FAQ'
import Home from "../Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import { SignOut } from '../SignOut/SignOut';



class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="Main-Container">
      <Route exact path="/faq" component={FAQ}/>  
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp}/> 
      <Route exact path="/signin" component={SignIn} />  
      <Route exact path="/myAccount" component={MyAccount} />
      <Route path="/sign-out" component={SignOut} />
        </div>
      </Router>
      </>
    );
  }
}

export default App;
