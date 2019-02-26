import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MainMenu.css'

class MainMenu extends Component {

//   toggle =  () {
//     const toggler = document.querySelector('.js-toggler');
//     const menu = document.querySelector('.js-menu')

//     toggler.addEventListener('click', function (event) {
//         menu.classList.toggle('expanded')
//     })
// }

  render() {
    return (
        <ul className="js-menu upperCase" >
          <li className="Labels">
            <NavLink to="/contacts">Home</NavLink>
            <NavLink to="/contacts">Moje konto</NavLink>
            <NavLink to="/contacts">Zaplanuj przeprowadzkę</NavLink>
            <NavLink to="/contacts">Moje przeprowadzki</NavLink>
            <NavLink to="/contacts">Wyloguj się</NavLink>
          </li>
        </ul>
    );
  }
}

export default MainMenu;