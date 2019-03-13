import React, { Component } from "react";
import FurnitureForm from "./FurnitureForm";
import "./Furnitures.css";

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
      <div className="Furnitures_All Width_480px">
        <h1 className='Furnitures_header'>Dodawanie zamówienia</h1>
        <div className ="Furnitures_progress-bar">Pasek postępu</div>
        <h2 className ="Furnitures_list-title">Lista mebli:</h2>
        
        {furnitures.map(furniture => (
          
          <>
           
            <ul className ="Furnitures_list">
              <li>Mebel: <span className="Furnitures_information">{furniture.name} </span></li>
              <li>Długość: <span className="Furnitures_information">{furniture.height} cm</span></li>
              <li>Szerokość: <span className="Furnitures_information"> {furniture.width} cm</span></li>
              <li>Głębokość: <span className="Furnitures_information"> {furniture.deepness} cm</span></li>
            </ul>
          </>
        ))}
        {this.props.children}
        <button className="Furnitures_next-button" onClick={this.saveAndContinue}>Dalej</button>
      </div>
    );
  }
}

export default Furnitures;
