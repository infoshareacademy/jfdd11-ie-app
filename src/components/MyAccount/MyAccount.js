import React, { Component } from "react";
import Stars from '../Stars/Stars.js';
import './MyAccount.css';
import StarsAverage from '../Stars/StarsAverage.js'
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { array } from "prop-types";



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
      <div className='myAccountAll'>
      <Header/>
        <div className='myAccount'>
        <h1 className = "titleMyAccount">MOJE KONTO<button className="editButton">Edytuj</button></h1>
        {user && <div><img className="myPhoto" src={user.avatar} alt="moje zdjęcie" /></div>}
        {user && <div className="companyName">{user.company_name}</div>}
        {user && <div className='information'><span className="smallTitle" >Imie:</span> {user.first_name}</div>}
        {user && <div className='information'><span className="smallTitle">Nazwisko:</span> {user.last_name}</div>}
        {user && <div className='information'><span className="smallTitle">E-mail:</span> {user.email}</div>}
        {user && <div className='information'><span className="smallTitle">Telefon:</span> {user.phone}</div>}
        </div>
        <div className='Marks'>
      <div className="mark"> Ocena <StarsAverage rating={mapMark.reduce((sum,current)=>sum+current/mapMark.length ,0 )} /> </div>
        </div>
        <div className="opinions">
        <h2 className = "opinionsTitle">OPINIE</h2><hr></hr>
        {this.state.opinions.map(opinion=> (
          <div key={opinion.id}><h3 className="userName">{opinion.user}<a className="markStars">
          <Stars
          rating={opinion.mark}
        />
        </a></h3><p className="opinionUsers">{opinion.coment}</p> <hr className="secund"></hr> </div>
        ))}
      </div>
      <Footer/>
      </div>
    );
  }
}
export default MyAccount;
