import React, { Component } from "react";

class Furnitures extends Component {
  saveAndContinue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  addFurniture = event => {
    event.preventDefault();
    this.props.handleFurnitureAdd();
  };

  state = {
    name: "",
    width: 0,
    height: 0,
    deepness: 0
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { furnitures } = this.state;

    return (
      <>
        <h1>Dodaj zamówienie</h1>
        <form>
          <h2>Lista mebli:</h2>
          {furnitures.map(furniture => (
            <>
              <label>Mebel</label>
              <input
                placeholder="name"
                defaultValue={furniture.name}
                onChange={this.props.handleChange("name")}
              />
              <label>Szerokość</label>
              <input
                placeholder="width"
                defaultValue={furniture.width}
                onChange={this.props.handleChange("width")}
              />
              <label>Wysokość</label>
              <input
                placeholder="height"
                defaultValue={furniture.height}
                onChange={this.props.handleChange("height")}
              />
              <label>Głębokość</label>
              <input
                placeholder="deepness"
                defaultValue={furniture.deepness}
                onChange={this.props.handleChange("deepness")}
              />
            </>
          ))}
          <button type={"button"} onClick={this.addFurniture}>
            Dodaj kolejny mebel
          </button>
          <button onClick={this.saveAndContinue}>Dalej</button>
        </form>
      </>
    );
  }
}

export default Furnitures;
