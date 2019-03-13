import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

import "./Offert.css";

class Offert extends Component {
  state = {
    classOffert: "",
    offert: null,
    client: []
  };

  toggleOffert = () => {
    this.state.classOffert === ""
      ? this.setState({
          classOffert: "expanded-offert"
        })
      : this.setState({
          classOffert: ""
        });
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
      <div className="Width_480px">
        <Header />
        <div className="Offert">
          <h1 className="offert-header">Oferta</h1>
          <div className="Ofert_first-section">
            <h2 className="offert-title">{this.state.offert.name}</h2>
            <a href="#make-offert">
            </a>
            <h1 className="Offert_title-section-first">
                Szczegóły miejsca odbioru
              </h1>
            <p className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                {this.state.client.first_name} {this.state.client.last_name}{" "}
              </span>
            </p>
            <ul className="Offert_main-section">
           
              <li className="Offert_offert-information-all">
                <span>
                  Adres odbioru:{" "}
                </span>
                <div className="Offert_offert-information">Krzemowa 7G/10 80-065 Gdańsk</div>
              </li>
              <li className="Offert_offert-information-all">
                <span>Winda: </span><span className="Offert_offert-information">{" "}
                {this.state.offert.isElevator ? "TAK" : "NIE"}</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Piętro: </span> <span className="Offert_offert-information"> 3</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Data: </span><span className="Offert_offert-information">
                {this.state.offert.date}</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Godzina: </span>
               <span className="Offert_offert-information">{this.state.offert.hour}</span> 
              </li>

              <li className="Offert_offert-information-all">
                <span>Wniesienie: </span><span className="Offert_offert-information">{" "}
                {this.state.offert.bringFurnitures ? "TAK" : "NIE"}</span>
              </li>
              <li className="Offert_offert-information-all">
                <span >Uwagi: </span> <span className="Offert_offert-information">Sofa waży 30kg.</span><div className="Offert_span"></div>
              </li>
            </ul>
            <div>
              <h1 className="Offert_title-section-secound">
                Szczegóły miejsca dostawy
              </h1>
              <li className="Offert_offert-information-all">
                <span>Adres dostawy: </span>
                <div className="Offert_offert-information">
                  Kołobrzeska 10/5 80-096 Gdańsk
                </div>
              </li>
              <li className="Offert_offert-information-all">
                Winda:{" "}
                <span className="Offert_offert-information">
                  {" "}
                  {this.state.offert.isElevator ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                Piętro: <span className="Offert_offert-information">2</span>
              </li>
            </div>
          </div>
          <div className="offert-furnitures">
            <h1 className="Offert_furniture-title-main">
              <span>Meble: </span>
            </h1>
            <h2 className="Offert_furnitures-title"> </h2>
            {this.state.offert.furnitures.map(furniture => (
              <div className="Offert_last-section">
                <p className="Offert_furnitures-type">{furniture.name}</p>
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
                      <td className="Offert_furnitures-details">
                        {furniture.deepness}
                      </td>
                      <td className="Offert_furnitures-details">
                        {furniture.width}
                      </td>
                      <td className="Offert_furnitures-details">
                        {furniture.height}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}

            <a href="#make-offert">
              <button
                className="Offert_offert-button"
                onClick={this.toggleOffert}
              >
                Złóż ofertę
              </button>
            </a>

            <div className={`Offert_form ${this.state.classOffert}`}>
              <p className="Offert_form-title" id="make-offert">
                Złóż ofertę:{" "}
                </p>
              <input type="text" name="price" placeholder="Wpisz swoją wycenę..." />
              <div className="Offert_form-title">
                <textarea name="description" placeholder="Jeśli chcesz dodać komentarz do oferty, wpisz go tutaj..." />
              </div>
              <div className="offert-box-buttons">
                <button className="Offert_form-button">Wyślij</button>
                <p className="offert-back" onClick={this.toggleOffert}>Zwiń -> </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Offert;
