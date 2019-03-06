import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

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
      <>
        <Header />
        <div className="Offert">
          <h1 className="offert-header">Oferta</h1>
          <div className="Ofert_first-section">
          <h2 className="offert-title">{this.state.offert.name}</h2>
          <a href="#make-offert">
            <button className="Offert_offert-button">Złóż ofertę</button>
          </a>
          <p className="Offert_offert-information-all">
            <span className="Offert_offert-information">{this.state.client.first_name} {this.state.client.last_name} </span>
            
          </p>
          <ul>
          <li className="Offert_offert-information-all">
              <span className="Offert_offert-information">Meble: </span>
              {this.state.offert.furnitures.length}
            </li>
            <li className="Offert_offert-information-all">
              <span className="Offert_offert-information">Data: </span>
              {this.state.offert.date}
            </li>
            <li className="Offert_offert-information-all">
              <span className="Offert_offert-information">Godzina: </span>
              {this.state.offert.hour}
            </li>
            <li className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                Winda:{" "}
              </span>{" "}
              {this.state.offert.isElevator ? "TAK" : "NIE"}
            </li>
            <li className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                Wniesienie:{" "}
              </span>{" "}
              {this.state.offert.bringFurnitures ? "TAK" : "NIE"}
            </li>
            
          </ul>
          </div>
          <div className="offert-furnitures">
            <span className="Offert_bottom-line" />
            <h2 className="Offert_furnitures-title"> </h2>
            {this.state.offert.furnitures.map(furniture => (
              <>
                <p className="Offert_furnitures-type">
                  {furniture.name}:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th className="Offert_furnitures-information">
                        Głębokość
                      </th>
                      <th className="Offert_furnitures-information">
                        {" "}
                        Szerokość
                      </th>
                      <th className="Offert_furnitures-information">
                        Wysokość
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="Offert_furnitures-details">{furniture.deepness}</td>
                      <td className="Offert_furnitures-details">{furniture.width}</td>
                      <td className="Offert_furnitures-details">{furniture.height}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ))}
          </div>

          <div className="Offert_form">
            <span className="Offert_bottom-line" />
            <h2 className="Offert_form-title" id="make-offert">
              Złóż ofertę:{" "}
            </h2>
            <label className="Offert_form-title" htmlFor="price">
              Proponowana cena:{" "}
            </label>
            <input type="text" name="price" placeholder="Cena" />
            <div className="Offert_form-title">
              <label htmlFor="description"> Uwagi: </label>
              <textarea name="description" placeholder="Uwagi" />
            </div>
            <button className="Offert_form-button">Wyślij</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Offert;
