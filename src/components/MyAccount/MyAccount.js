import React, { Component } from "react";
import Stars from '../Stars/Stars.js';
import './MyAccount.css';
import StarsAverage from '../Stars/StarsAverage.js'


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

  

    return (
      <div className='myAccountAll'>
        <div className='myAccount'>
        <h1>MOJE KONTO</h1>
        {user && <div><img src={user.avatar} alt="moje zdjęcie" /></div>}
        {user && <div className="companyName">{user.company_name}</div>}
        {user && <div className='information'><span>Imie:</span> {user.first_name}</div>}
        {user && <div className='information'><span>Nazwisko:</span> {user.last_name}</div>}
        {user && <div className='information'><span>E-mail:</span> {user.email}</div>}
        </div>
        <div className='Marks'>
      <div className="mark"> <a className ="star">Ocena </a> <StarsAverage/> </div>
        </div>
        <div className="opinions">
        <h2>OPINIE</h2><hr></hr>
        {this.state.opinions.map(opinion=> (
          <div key={opinion.id}><h3>{opinion.user}<a className="markStars"><Stars/></a></h3><p>{opinion.coment}</p> <hr className="secund"></hr> </div>
        ))}
      </div>
      </div>
    );
  }
}
export default MyAccount;
