import React, { Component } from "react";
import Stars from '../Stars/Stars.js';
import './MyAccount.css';
import StarsAverage from '../Stars/StarsAverage.js'
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";




class MyAccount extends Component {
  state = {
    users: [],
    opinions: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/usersInformations.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: Object.entries(data).map(([id, value]) => ({ id, ...value }))
        })
      );

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
    const user =
      this.state.users.length !== 0
        ? this.state.users.find(user => user.id === 1)
        : null;

        const mapMark=this.state.opinions.map(opinion=>parseInt(opinion.mark))

  

    return (
      <div className='MyAccount_All'>
      <Header/>
        <div className='MyAccount_carrier-information'>
        <h1 className = "MyAccount_title">MOJE KONTO<button className="MyAccount_edit-button">Edytuj</button></h1>
        {user && <div><img className="MyAccount_user-photo" src={user.avatar} alt="moje zdjęcie" /></div>}
        {user && <div className="MyAccount_company-name">{user.company_name}</div>}
        {user && <div className="MyAccount_information"><span className="MyAccount_information-title" >Imie:</span> {user.first_name}</div>}
        {user && <div className="MyAccount_information"><span className="MyAccount_information-title">Nazwisko:</span> {user.last_name}</div>}
        {user && <div className="MyAccount_information"><span className="MyAccount_information-title">E-mail:</span> {user.email}</div>}
        {user && <div className="MyAccount_information"><span className="MyAccount_information-title">Telefon:</span> {user.phone}</div>}
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
