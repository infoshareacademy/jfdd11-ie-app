import React, { Component } from "react";
import Furnitures from "./Furnitures";
import Pickup from "./Pickup";
import Deliver from "./Deliver";
import DateOfRemoval from "./DateOfRemoval";
import Success from "./Success";
import FurnitureForm from "./FurnitureForm";

class MainForm extends Component {
  state = {
    step: 1,
    furnitures: [],
    deliveryAddress: {
      address: "",
      city: "",
      postalCode: "",
      isElevator: false,
      floor: 0
    },
    pickupAddress: {
      address: "",
      city: "",
      postalCode: "",
      isElevator: false,
      floor: 0
    },
    bringFurnitures: false,
    comments: "",
    dateOfRemoval: "",
    hourOfRemoval: "",
    offert: {
      carrierId: "",
      price: ""
    }
  };

  handleFurnitureAdd = furniture => {
    console.log(furniture);
    this.setState({
      furnitures: [...this.state.furnitures, furniture]
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      deliveryAddress,
      furnitures,
      pickupAddress,
      bringFurnitures,
      comments,
      dateOfRemoval,
      hourOfRemoval
    } = this.state;

    switch (step) {
      case 1:
        return (
          <Furnitures
            nextStep={this.nextStep}
            furnitures={furnitures}
            handleFurnitureAdd={this.handleFurnitureAdd}
          >
            <FurnitureForm addFurniture={this.handleFurnitureAdd} />
          </Furnitures>
        );
      case 2:
        return (
          <Pickup
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            pickupAddress={pickupAddress}
            bringFurnitures={bringFurnitures}
          />
        );
      case 3:
        return (
          <Deliver
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            deliveryAddress={deliveryAddress}
            comments={comments}
          />
        );
      case 4:
        return (
          <DateOfRemoval
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            dateOfRemoval={dateOfRemoval}
            hourOfRemoval={hourOfRemoval}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default MainForm;
