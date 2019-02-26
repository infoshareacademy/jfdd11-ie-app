import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./Header.css";

import logo from "./logo.png";
import menu from "./menu-mobile.svg";

class Header extends Component {
  state = {
    class: ""
  };

  toggle = () => {
    this.state.class === ""
      ? this.setState({
          class: "expanded"
        })
      : this.setState({
          class: ""
        });
  };

  render() {
    return (
      <nav className="menu">
        <img src={logo} alt="logo-MoveIt" className="logo" />
        <div>
          <img
            src={menu}
            alt="icon-hamburger-menu"
            className="js-toggler"
            onClick={this.toggle}
          />
        </div>
        <ul className={`js-menu upperCase ${this.state.class}`}>
            <li className="Link-Style"><NavLink to="/contacts">Home</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Moje konto</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Zaplanuj przeprowadzkę</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Moje przeprowadzki</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Wyloguj się</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
