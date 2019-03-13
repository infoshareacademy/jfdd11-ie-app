import React, { Component } from "react";
import "./Pickup.css"

class Pickup extends Component {
  saveAndContinue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { pickupAddress } = this.props;
    const { bringFurnitures } = this.props;

    return (
      <div className= "Pickup_all Width_480px">
      
        <h1 className="Pickup_header">Dodawanie zamówienia</h1>
        <form>
        <h1 className="Pickup_progress_bar">Pasek postępu</h1>
          <h2 className="Pickup_list-title"> Szczegóły miejsca odbioru</h2>
          <div className="Pickup_all-information">
            <div className="Pickup_information-details">
              <label>Adres: </label>
            <input  className="Pickup_input1"placeholder="" defaultValue={pickupAddress.address} />
            </div>
           <div className="Pickup_information-details"> <label>Miasto: </label>
            <input className="Pickup_input2" placeholder="" defaultValue={pickupAddress.city} />
            </div>
            <div className="Pickup_information-details"><label>Kod pocztowy: 
            </label>
            <input className="Pickup_input3"
              placeholder=""
              defaultValue={pickupAddress.postalCode}
            /></div>
            <div className="Pickup_information-details"><label>Piętro: </label>
            <input className="Pickup_input4"  defaultValue={pickupAddress.floor} /></div>
            <div className="Pickup_information-details"><label>Winda: </label>
            <input className="Pickup_input5"  defaultValue={pickupAddress.floor} /></div>
          </div>
          <button className="Pickup_back-button" onClick={this.back}>Wstecz</button>
          <button className="Pickup_next-button" onClick={this.saveAndContinue}>Dalej</button>
        </form>
      </div>
    );
  }
}

export default Pickup;
