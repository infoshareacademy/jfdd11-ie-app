import React, { Component } from "react";

import MainMenu from "../MainMenu";

import "./Header.css"

import logo from './logo.png';
import menu from './menu-mobile.svg';

class Header extends Component {
  render() {
    return (
        <nav className="menu">
          <a href="#hero-image">
          <img src={logo} alt="logo-MoveIt" className="logo"/>
          </a>
          <div>
            <img src={menu} alt="icon-hamburger-menu" className="js-toggler" />
          </div>
          <MainMenu/>
        </nav>
    );
  }
}

export default Header;
