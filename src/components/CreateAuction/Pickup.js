import React, { Component } from "react";

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
      <>
        <h1>Dodaj zamówienie</h1>
        <form>
          <h2>Szczegóły miejsca odbioru</h2>
          <>
            <label>Adres</label>
            <input placeholder="address" defaultValue={pickupAddress.address} />
            <label>Miasto</label>
            <input placeholder="city" defaultValue={pickupAddress.city} />
            <label>Kod pocztowy</label>
            <input
              placeholder="postalCode"
              defaultValue={pickupAddress.postalCode}
            />
            <label>Piętro</label>
            <input placeholder="floor" defaultValue={pickupAddress.floor} />
            <label>Czy jest winda?</label>
            <input placeholder="floor" defaultValue={pickupAddress.floor} />
          </>
          <button onClick={this.back}>Wstecz</button>
          <button onClick={this.saveAndContinue}>Dalej</button>
        </form>
      </>
    );
  }
}

export default Pickup;
