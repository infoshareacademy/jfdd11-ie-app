import React, { Component } from "react";

import "./SignIn.css";
import { withAuth } from "../../contexts/AuthContext";
import Header from "./../Header";
import Footer from "./../Footer";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    success: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { signIn } = this.props.authContext;
    signIn(this.state.email, this.state.password)
      .then(data =>
        this.setState({
          error: null,
          success: "Logowanie przebiegło pomyślnie"
        })
      )
      .catch(error => this.setState({ error: error, success: null }));
  };

  render() {
    const { user, signOut } = this.props.authContext;
    return (
      <div className="signin-main-container">
        <Header />
        {/* {user && (
          <p>
            {user.email}{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        )} */}
        {this.state.error && (
          <p style={{ color: "red" }}>{this.state.error.message}</p>
        )}
        {this.state.success && (
          <p style={{ color: "green" }}>{this.state.success}</p>
        )}

        <div className="signin-page">
          <h2 className="upperCase white-text">Logowanie</h2>
          <p className="upperCase white-text margin-bottom">
            Wypełnij poniższe dane, aby się zalogować
          </p>
          <div />
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <div>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Wpisz swój adres email..."
              />
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Wpisz swoje hasło..."
              />
            </div>
            <div className="signin-buttons-box">
            <div className="sigin-register-area">
                <p>Nie masz jeszcze konta?</p>
                <button className="signin-register-button">REJESTRACJA</button>
              </div>
              <button className="signin-login-button">ZALOGUJ SIĘ</button>

            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuth(SignIn);
