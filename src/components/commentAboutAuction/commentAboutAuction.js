import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import './commentAboutAuctions.css'

class commentAboutAuction extends Component {
  render() {
    return (
      <div className="Main-Container">
        <Header />
        <div>INFO</div>

        <Footer />
      </div>
    );
  }
}

export default commentAboutAuction;
