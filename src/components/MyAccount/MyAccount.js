import React, { Component } from "react";
import Stars from '../Stars/Stars.js';
import './MyAccount.css';
import StarsAverage from '../Stars/StarsAverage.js'
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import firebase from 'firebase';




class MyAccount extends Component {
  state = {
    name:'',
    surname:'',
    email:'',
    phone:'',
    company:'',
    opinions: [],
    editedUserId: null,
  };

 

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
              name: user.name,
              surname: user.surname,
              email: email,
              phone:user.phone,
              company:user.company,
            });
          });
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
   

        const mapMark=this.state.opinions.map(opinion=>parseInt(opinion.mark))
       

  

    return (
      <div className='MyAccount_All'>
      <Header/>
        <div className='MyAccount_carrier-information'>
        <h1 className = "MyAccount_title">MOJE KONTO<button className="MyAccount_edit-button">Edytuj</button></h1>
         <div><img className="MyAccount_user-photo" src="https://robohash.org/perferendisfugiatvoluptas.bmp?size=100x100&set=set1" alt="moje zdjęcie" /></div>
         <div className="MyAccount_company-name">{this.state.company}</div>
         <div className="MyAccount_information"><span className="MyAccount_information-title" >Imie:</span> {this.state.name}</div>
         <div className="MyAccount_information"><span className="MyAccount_information-title">Nazwisko:</span> {this.state.surname}</div>
        <div className="MyAccount_information"><span className="MyAccount_information-title">E-mail:</span> {this.state.email}</div>
         <div className="MyAccount_information"><span className="MyAccount_information-title">Telefon:</span> {this.state.phone}</div>
        </div>
        <div className="MyAccount_marks">
      <div className="MyAccount_starts-average"> Ocena ( {mapMark.reduce((sum,current)=>sum+current/mapMark.length ,0 )} ) <StarsAverage average={mapMark.reduce((sum,current)=>sum+current/mapMark.length ,0 )} /> </div>
        </div>
        <div className="MyAccount_opinions">
        <h2 className = "MyAccount_opinions-title">OPINIE</h2><hr></hr>
        {this.state.opinions.map(opinion=> (
          <div key={opinion.id}><h3 className="MyAccount_user-name">{opinion.user}<span className="MyAccount_mark-stars">
          <Stars
          rating={opinion.mark}
        />
        </span></h3><p className="MyAccount_users-opinion">{opinion.coment}</p> <hr className="MyAccount_line"></hr> </div>
        ))}
      </div>
      <Footer/>
      </div>
    );
  }
}
export default MyAccount;
