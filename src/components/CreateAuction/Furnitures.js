import React, { Component } from "react";
import FurnitureForm from "./FurnitureForm";

class Furnitures extends Component {
  saveAndContinue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  addFurniture = event => {
    event.preventDefault();
    this.props.handleFurnitureAdd();
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { furnitures } = this.props;

    return (
      <>
        <h1>Dodaj zamówienie</h1>
        {furnitures.map(furniture => (
          <>
            <ul>
              <li>Mebel: {furniture.name} cm</li>
              <li>Długość: {furniture.height} cm</li>
              <li>Szerokość: {furniture.width} cm</li>
              <li>Głębokość: {furniture.deepness} cm</li>
            </ul>
          </>
        ))}
        {this.props.children}
        <button onClick={this.saveAndContinue}>Dalej</button>
      </>
    );
  }
}

export default Furnitures;
