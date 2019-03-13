import React, { Component } from "react";
import Stars from "../Stars/Stars.js";
import "./MyAccount.css";
import StarsAverage from "../Stars/StarsAverage.js";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

import firebase from "firebase";

import { getUserPromise, updateUserPromise } from "../../services";
import MyAccountEdit from "../MyAccountEdit/MyAccountEdit";

class MyAccount extends Component {
  state = {
    user: {
      company: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
    
    },
    users: [],
    opinions: [],
    editedUserId: null
  };

  openEditionForm = userId => {
    this.setState({
      editedUserId: userId
    });
  };

  closeEditionForm = userId => {
    this.setState({
      editedUserId: null
    });
  };

  updateUser = ( company, name, surname,  email, phone) => {
    updateUserPromise(this.state.user.id, company, name, surname, email, phone)
      .then(() => this.syncProfile(this.state.user.id, email))
      .then(() =>
        this.setState({
          editedUserId: null,
        })
      );
  };
  
  syncUser = () =>
    getUserPromise().then(users => this.setState({ users }));

  syncProfile = (userId, email) => {
    firebase
          .database()
          .ref(`users/${userId}`)
          .once("value")
          .then(snapshot => snapshot.val())
          .then(user => {
            if (user === null) {
              return;
            }
            this.setState({
              user: {
                id: userId,
                company: user.company,
                name: user.name,
                surname: user.surname,
                email: email,
                phone: user.phone,
                
              }
            });
          });
  }

  componentDidMount() {
    this.syncUser()
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser !== null) {
        const userId = currentUser.uid;
        const email = currentUser.email;

        this.syncProfile(userId, email)
      }
    });

    fetch(process.env.PUBLIC_URL + "/data/carrierOpinions.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          opinions: Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          }))
        })
      );
  }

  render() {
    const mapMark = this.state.opinions.map(opinion => parseInt(opinion.mark));
    const { editedUserId } = this.state;
    const averageOpinion = mapMark.reduce(
      (sum, current) => sum + current / mapMark.length,
      0
    );

 

    return (
      <div className="MyAccount_All Width_480px">
        <Header />
        {this.state.user.id === editedUserId ? (
          <MyAccountEdit
            key={this.state.user.id}
            user={this.state.user}
            handleData={this.updateUser}
            extraButtons={() => (
              <>
                <h1 className="MyAccount_title">
                  MOJE KONTO
                  <button
                    className="MyAccount_edit-button"
                    onClick={this.closeEditionForm}
                  >
                    Anuluj
                  </button>
                </h1>
              </>
            )}
          />
        ) : (
          <div
            key={this.state.user.id}
            className="MyAccount_carrier-information"
          >
            <h1 className="MyAccount_title">
              MOJE KONTO{" "}
              <button
                className="MyAccount_edit-button"
                onClick={() => this.openEditionForm(this.state.user.id)}
              >
                Edytuj
              </button>{" "}
            </h1>
            <div>
              <img 
                className="MyAccount_user-photo"
                src="https://robohash.org/perferendisfugiatvoluptas.bmp?size=100x100&set=set1"
                alt="moje zdjęcie"
              />
            </div>
            <div className="MyAccount_company-name">{this.state.user.company}</div>
            <div className="MyAccount_information">
              <span className="MyAccount_information-title">Imie:</span>{" "}
              {this.state.user.name}
            </div>
            <div className="MyAccount_information">
              <span className="MyAccount_information-title">Nazwisko:</span>{" "}
              {this.state.user.surname}
            </div>
            <div className="MyAccount_information">
              <span className="MyAccount_information-title">Telefon:</span>{" "}
              {this.state.user.phone}
            </div>
            <div className="MyAccount_information">
              <span className="MyAccount_information-title">E-mail:</span>{" "}
              {this.state.user.email}
            </div>
          </div>
        )}
        <div className="MyAccount_marks">
          <div className="MyAccount_starts-average">
            {" "}
            Ocena ( {averageOpinion.toFixed(2)} ){" "}
            <StarsAverage
              average={mapMark.reduce(
                (sum, current) => sum + current / mapMark.length,
                0
              )}
            />
          </div>
          <div className="MyAccount_opinions">
            <h2 className="MyAccount_opinions-title">OPINIE</h2>
            <hr />
            {this.state.opinions.map(opinion => (
              <div key={opinion.id}>
                <h3 className="MyAccount_user-name">
                  {opinion.user}
                  <span className="MyAccount_mark-stars">
                    <Stars rating={opinion.mark} />
                  </span>
                </h3>
                <p className="MyAccount_users-opinion">{opinion.coment}</p>{" "}
                <hr className="MyAccount_line" />{" "}
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MyAccount;
