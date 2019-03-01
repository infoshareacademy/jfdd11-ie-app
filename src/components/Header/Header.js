import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./Header.css";
import { withAuth } from '../../contexts/AuthContext';
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
            <li className="Link-Style"><NavLink to="/">Home</NavLink></li>
            <li className="Link-Style"><NavLink to="/signin">Logowanie</NavLink></li>
            <li className="Link-Style"><NavLink to="/myAccount">Moje konto</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Zaplanuj przeprowadzkę</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Moje przeprowadzki</NavLink></li>
            <li className="Link-Style"><NavLink to="/faq">FAQ</NavLink></li>
            <li className="Link-Style"><NavLink to="/contacts">Wyloguj się</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default withAuth(Header);
