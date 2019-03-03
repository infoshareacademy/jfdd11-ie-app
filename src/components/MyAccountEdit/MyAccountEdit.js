import React, { Component } from 'react';
import './MyAccountEdit.css'
import '../MyAccount/MyAccount.css';

class MyAccountEdit extends Component {

  state = {
    name: this.props.name,
    surname: this.props.surname,
    phone: this.props.phone,
    email:this.props.email,
    company:this.props.company
  }

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

  handleSaveClick = () => {
    this.props.handleData(
      this.props.user.uid,
      this.state.name,
      this.state.surname,
      this.state.phone
    )
  }

  render() {
    return (

          <div className='MyAccount_carrier-information'>
          <h1 className = "MyAccountEdit_title">
          {this.props.extraButtons()}
          
          <button onClick={this.handleSaveClick} className="MyAccount_edit-button">Zapisz</button>
          
          </h1>

           <div><img className="MyAccount_user-photo" src="https://robohash.org/perferendisfugiatvoluptas.bmp?size=100x100&set=set1" alt="moje zdjęcie" /></div>
           <div className="MyAccount_company-name"><input value={this.state.company} name ="company" onChange={this.handleChange}/></div>
           <div className="MyAccount_information"><span className="MyAccount_information-title" >Imie:</span><input value={this.state.nema} name ="name" onChange={this.handleChange}/></div>
           <div className="MyAccount_information"><span className="MyAccount_information-title">Nazwisko:</span> <input value={this.state.surname} name ="surname" onChange={this.handleChange}/></div>
          <div className="MyAccount_information"><span className="MyAccount_information-title">E-mail:</span> <input value={this.state.email} name ="email" onChange={this.handleChange}/>{this.state.email}</div>
           <div className="MyAccount_information"><span className="MyAccount_information-title">Telefon:</span> <input value={this.state.phone} name ="phone" onChange={this.handleChange}/></div>
          </div>


   
        
    );
  }
}

export default MyAccountEdit;