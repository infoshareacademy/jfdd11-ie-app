import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { withAuth } from "../../contexts/AuthContext";
import "./AuctionDetails.css";

class AuctionDetails extends Component {
  render() {
    console.log(this.props.match.params.offerId);
    console.log(this.props.authContext.auctions[0].furnitures);
    if (this.props.match.params.offerId === null) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <Header />
        <div className="Offert">
          <h1 className="offert-header">Oferta</h1>
          <div className="Ofert_first-section">
            <h2 className="offert-title">{this.props.match.params.offerId}</h2>
            <a href="#make-offert" />
            <h1 className="Offert_title-section-first">
              Szczegóły miejsca odbioru
            </h1>
            <p className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                {this.props.match.params.offerId}{" "}
                {this.props.match.params.offerId}{" "}
              </span>
            </p>
            <ul className="Offert_main-section">
              <li className="Offert_offert-information-all">
                <span>Adres odbioru: </span>
                <div className="Offert_offert-information">
                  Krzemowa 7G/10 80-065 Gdańsk
                </div>
              </li>
              <li className="Offert_offert-information-all">
                <span>Winda: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {this.props.match.params.offerId ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Piętro: </span>{" "}
                <span className="Offert_offert-information"> 3</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Data: </span>
                <span className="Offert_offert-information">
                  {this.props.match.params.offerId}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Godzina: </span>
                <span className="Offert_offert-information">
                  {this.props.match.params.offerId}
                </span>
              </li>

              <li className="Offert_offert-information-all">
                <span>Wniesienie: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {this.props.match.params.offerId ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Uwagi: </span>{" "}
                <span className="Offert_offert-information">
                  Sofa waży 30kg.
                </span>
                <div className="Offert_span" />
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
                  {this.props.match.params.offerId ? "TAK" : "NIE"}
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
            {this.props.authContext.auctions[0].furnitures.map(furniture => (
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
                        {furniture.depth}
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
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default withAuth(AuctionDetails);
