import React, { Component } from "react";

import "./Home.css";
import Header from "../Header";
import Footer from "../Footer";

import { withAuth } from '../../contexts/AuthContext';

class Home extends Component {
  render() {
    // const { user, signOut } = this.props.authContext;
    return (
      <div className="Main-Container">
        <Header />
        {/* {user && (
          <p>
            {user.email}{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        )} */}
        <div className="hero-image">
          <h1 className="first-claim upperCase">Planujesz przeprowadzkę?</h1>
          <h1 className="second-claim upperCase">Daj sobie pomóc!</h1>

          <p className="title-hero-image margin-bottom">
            <span className="white-text">Aplikacja MoveIt porówna</span> ceny przewoźników z Twojej okolicy. <span className="white-text">
               Dzięki temu wybierzesz najlepszą ofertę, spełniającą Twoje
              kryteria.
            </span>
          </p>
        </div>
        <Footer />
      </div>

    );
  }
}

export default withAuth(Home);
