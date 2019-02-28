import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { NavLink } from 'react-router-dom';
import "./SignUp.css";

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

      toggleIsCarrier = () =>{
          this.setState({
              isCarrier: !this.state.isCarrier
          })
      };

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

    render(){
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
                    <input id="user" name="isUser" type="checkbox"></input>
                    </label>
                    <label htmlFor="carrier">Chcę pomóc innym w przeprowadzce
                    <input id="carrier" name="isCarrier" type="checkbox" onChange={this.toggleIsCarrier}></input>
                    </label>
                </div>
                <label htmlFor="name">Imię</label>
                <input id="name" name="name"></input>

                <label htmlFor="surname">Nazwisko</label>
                <input id="surname" name="surname"></input>

                {this.state.isCarrier?
                <>
                <label htmlFor="company">Nazwa firmy</label>
                <input id="company" name="company"></input>
                </>
                :
                null}

                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email"></input>

                <label htmlFor="password" type="password">Hasło</label>
                <input id="password" name="password"></input>

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