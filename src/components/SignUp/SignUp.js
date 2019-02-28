import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { NavLink } from 'react-router-dom';
import "./SignUp.css";
import firebase from 'firebase';

class SignUp extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        company: '',
        isCarrier: false,
        error: null,
        success: null,
      };

      changeRoleToUser = () =>
          this.setState({
              isCarrier: false
          });
      changeRoleToCarrier = ()=>
        this.setState({
            isCarrier: true
        });

      handleChange = event => {
        const fieldName = event.target.name;
        const value =
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value;
    
        this.setState({
          [fieldName]: value,
        });
      };

      handleSubmit = event => {
        event.preventDefault();
    
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(data => {
            const userId = firebase.auth().currentUser.uid;
            firebase
              .database()
              .ref('users')
              .child(userId)
              .set({
                name: this.state.name,
                surname: this.state.surname,
              });
            this.setState({ error: null, success: 'Account created' });
          })
          .catch(error => this.setState({ error: error, success: null }));
      };

    render(){
        console.log(this.state.password);
        return(
            <div className="sign-up_root">
            <Header/>
            <div className="sign-up_main">
            <h1>Zarejestruj się!</h1>
            <p>Do czego chcesz użyć</p>
            <p>moveIt</p>
            <form>
                <div className="sign-up_checkboxes">
                    <label htmlFor="user">Chcę się przeprowadzić
                    <input id="user" name="user-type" type="radio" onChange={this.changeRoleToUser}></input>
                    </label>
                    <label htmlFor="carrier">Chcę pomóc innym w przeprowadzce
                    <input id="carrier" name="user-type" type="radio" onChange={this.changeRoleToCarrier}></input>
                    </label>
                </div>
                <input id="name" name="name" onChange={this.handleChange} placeholder="Imię"></input>

                <input id="surname" name="surname" onChange={this.handleChange} placeholder="Nazwisko"></input>

                <input id="phone" name="phone" onChange={this.handleChange} placeholder="Telefon"></input>

                {this.state.isCarrier?
                <>
                <label htmlFor="company">Nazwa firmy</label>
                <input id="company" name="company" onChange={this.handleChange} placeholder="Nazwa firmy"></input>
                </>
                :
                null}

                <input id="email" name="email" type="email" onChange={this.handleChange}placeholder="E-mail"></input>

                <input type="password" id="password" name="password" onChange={this.handleChange}placeholder="Hasło"></input>

                <button>Zarejestruj się</button>
                <button>Zarejestruj się z Google</button>
            </form>
            <p>Mam już konto. <NavLink to="/sign-in">Zaloguj mnie!</NavLink></p>
            </div>
            <Footer />
            </div>

        )
    }
}
export default SignUp;