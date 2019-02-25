import React, { Component } from "react";

import "./Home.css";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
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
      </div>
    );
  }
}

export default Home;
