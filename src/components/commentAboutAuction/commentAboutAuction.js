import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Stars from "../Stars/StarsComment";
import firebase from "firebase";

import "./commentAboutAuction.css";
import StarsComment from "../Stars/StarsComment";

class commentAboutAuction extends Component {


  componentDidMount() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser !== null) {
        const userId = currentUser.uid;
        const email = currentUser.email;

        firebase
          .database()
          .ref(`users/${userId}`)
          .once('value')
          .then(snapshot => snapshot.val())
          .then(user => {
            if (user === null) {
              return;
            }
            this.setState({
              auctionName: user.auctionName,
              company:user.company,
            });
          });
      }
    });

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
            <p className="comments-text">
              Twoje ocena:
            </p>
            <StarsComment />
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
