import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { NavLink } from 'react-router-dom';
import "./SignUp.css";
import firebase from 'firebase';

const initialState = {
        name: '',
        surname: '',
        email: '',
        password: '',
        company: '',
        phone: '',
        isCarrier: false,
        error: null,
        success: null,
}
class SignUp extends Component {
    state = initialState;

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

      // signUpWithGoogle (){
      //   const provider = new firebase.auth.GoogleAuthProvider();
      //   firebase
      //   .auth()
      //   .signInWithPopup(provider)
      //   .then(function(result){
      //     console.log(result);
      //   })
      // }

      handleSubmit = event => {
        event.preventDefault();
    
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            const userId = firebase.auth().currentUser.uid;
            firebase
              .database()
              .ref('users')
              .child(userId)
              .set({
                name: this.state.name,
                surname: this.state.surname,
                company: this.state.company,
                phone: this.state.phone,
                isCarrier: this.state.isCarrier

              });
            this.setState({ ...initialState, error: null, success: 'Konto zostało założone' });
          })
          .catch(error => this.setState({ error: error, success: null }));
          
      };

    render(){
      console.log(this.state.error)
      const {name, surname, phone, isCarrier, company, email, password, error, success} = this.state;
        return(
            <div className="sign-up_root">
            <Header/>
            <div className="sign-up_main">
            <div className="sign-up_welcome-message">
            <h1>Zarejestruj się!</h1>
            <p>Do czego chcesz użyć</p>
            <span>moveIt</span>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="sign-up_checkboxes">
                    
                    <input id="user" name="user-type" type="radio" onChange={this.changeRoleToUser} required></input>
                    <label htmlFor="user">Chcę się przeprowadzić</label>
                 
                    <input id="carrier" name="user-type" type="radio" onChange={this.changeRoleToCarrier}></input>
                    <label htmlFor="carrier">Chcę pomóc innym w przeprowadzce</label>
                </div>
                <input id="name" name="name" type="text" onChange={this.handleChange} placeholder="Imię" value={name} required></input>

                <input id="surname" name="surname" type="text" onChange={this.handleChange} placeholder="Nazwisko" value={surname} required></input>

                <input id="phone" name="phone" type="text" onChange={this.handleChange} placeholder="Telefon" value={phone} required></input>

                {isCarrier?
                <>
                <input id="company" name="company" type="text" onChange={this.handleChange} placeholder="Nazwa firmy" value={company}></input>
                </>
                :
                null}

                <input id="email" name="email" type="email" onChange={this.handleChange}placeholder="E-mail" value={email}></input>

                <input type="password" id="password" name="password" onChange={this.handleChange}placeholder="Hasło" value={password}></input>

                <button>ZAREJESTRUJ SIĘ</button>
                {/* <button onClick={this.signUpWithGoogle}>Zarejestruj się z Google</button> */}
            </form>
            <div className="sign-up_sign-in">
            <p>Mam już konto. <NavLink to="/signin">Zaloguj mnie!</NavLink></p>
            </div>
            {error?<p className="sign-up_error">{error.message}</p>:<p className="sign-up_success">{success}</p>}
            </div>
            <Footer />
            </div>

        )
    }
}
export default SignUp;