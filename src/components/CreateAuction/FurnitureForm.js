import React, { Component } from "react";

class FurnitureForm extends Component {
  state = {
    name: "",
    width: null,
    height: null,
    deepness: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFurniture(this.state);
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const furniture = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Lista mebli:</h2>

          <input
            placeholder="Jaki mebel"
            defaultValue={furniture.name}
            onChange={this.handleChange("name")}
          />
          <input
            placeholder="Szerokość"
            defaultValue={furniture.width}
            onChange={this.handleChange("width")}
          />
          <input
            placeholder="Wysokość"
            defaultValue={furniture.height}
            onChange={this.handleChange("height")}
          />
          <input
            placeholder="Głębokość"
            defaultValue={furniture.deepness}
            onChange={this.handleChange("deepness")}
          />

          <button type={"submit"}>Zapisz mebel</button>
        </form>
      </>
    );
  }
}

export default FurnitureForm;
