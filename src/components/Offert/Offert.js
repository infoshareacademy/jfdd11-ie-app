import React, { Component } from "react";

import "./Offert.css";

class Offert extends Component {
  state = {
    offert: null,
    client: []
  };

  componentDidMount() {
    const { offertId } = this.props.match.params;
    fetch(process.env.PUBLIC_URL + "/data/offerts.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          offert: data[offertId]
        })
      );

    fetch(process.env.PUBLIC_URL + "/data/clients.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          client: data[this.state.offert.clientId]
        })
      );
  }

  render() {
    if (this.state.offert === null) {
      return <p>Loading...</p>;
    }
    return (
      <div className="Offert">
        <h1 className="offert-header">Oferta</h1>
        <h2 className="offert-title">{this.state.offert.name}</h2>
        <p>
          Wystawiający: {this.state.client.first_name}{" "}
          {this.state.client.last_name}
        </p>
        <ul>
          <li>Termin: {this.state.offert.date}</li>
          <li>Godzina: {this.state.offert.hour}</li>
          <li>
            Usługa z wniesieniem:{" "}
            {this.state.offert.bringFurnitures ? "TAK" : "NIE"}
          </li>
          <li>
            Budynek z windą: {this.state.offert.isElevator ? "TAK" : "NIE"}
          </li>
        </ul>
        <div className="offert-furnitures">
          <h2>MEBLE:</h2>
          {this.state.offert.furnitures.map(furniture => (
            <>
              <p>{furniture.name} - Wymiary:</p>
              <table>
                <thead>
                  <tr>
                    <th>Głębokość</th>
                    <th>Szerokość</th>
                    <th>Wysokość</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{furniture.deepness}</td>
                    <td>{furniture.width}</td>
                    <td>{furniture.height}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ))}
        </div>

        <h2>Złóż ofertę: </h2>
        <label htmlFor="price">Proponowana cena:</label>
        <input type="text" name="price" placeholder="Cena" />
        <label htmlFor="description">Uwagi:</label>
        <textarea name="description" placeholder="Uwagi" />
        <button>Wyślij</button>
      </div>
    );
  }
}

export default Offert;
