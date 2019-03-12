import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import firebase from "firebase";

import "./commentAboutAuction.css";
import StarsComment from "../Stars/StarsComment";
class commentAboutAuction extends Component {
  state = {
    rating: 0,
    comment: '',
  };

  changeRating = (newRating) => {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <div className="comments-main-container">
        <Header />
        <div className="comments-body">
          <p className="comments-title">Oceń przewoźnika</p>
          <div className="comments-main-body">
            <p className="comments-text">
              Nazwa aukcji:{" "}
              <span className="comments-copy-inf">
                Przewóz mebli Gdynia-Gdańsk Kochanowskiego
              </span>
            </p>
            <p className="comments-text comments-margin">
              Przewoźnik:
              <span className="comments-copy-inf">Trans-Bus przewozy</span>
            </p>
            <div className="comments-copy">
              <textarea
                name="description "
                placeholder="Wpisz komentarz na temat realizacji usługi przez przewoźnika..."
              />
            </div>
            <p className="comments-text">Twoje ocena:</p>
            <StarsComment
              rating={this.state.rating}
              changeRating={this.changeRating}
            />
            <button className="comments-button comments-margin-bottom">
              Dodaj opinie
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default commentAboutAuction;
