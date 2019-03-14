import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Offert.css";
import { withAuth } from "../../contexts/AuthContext";

class Offert extends Component {
  state = {
    classOffert: "",
    offert: this.props.authContext.auctions,
    client: this.props.authContext.users,
    price: "",
    commentToPrice: "",
    chosen: false
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

  addPrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  addCommentToPrice = event => {
    this.setState({
      commentToPrice: event.target.value
    });
  };
  // addOfferToAuction = (price, comment, auctionId) => {
  //   firebase.database().ref("offers").child(offerId).remove()
  // }
  // ściągnąć offers z withAuth i porównać z auctionId. 
  // .find(auction=>auction.auctionId === offertId)
  render() {
    const auctionId = this.props.match.params.offertId;
    const singleAuction = this.state.offert.find(auction => auction.auctionId === auctionId)
    const client = this.state.client.find(client=>client.id === singleAuction.clientId)
    console.log(auctionId);
    console.log(this.state.offert);
    console.log(singleAuction);
    console.log(client)
    if (this.state.offert === null) {
      return <p>Loading...</p>;
    }
    return (
      <div className="Width_480px">
        <Header />
        <div className="Offert">
          <h1 className="offert-header">Oferta</h1>
          <div className="Ofert_first-section">
            <h2 className="offert-title">{singleAuction.name}</h2>
            <a href="#make-offert" />
            <h1 className="Offert_title-section-first">
              Szczegóły miejsca odbioru
            </h1>
            <p className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                {client.name} {client.surname}{" "}
              </span>
            </p>
            <ul className="Offert_main-section">
              <li className="Offert_offert-information-all">
                <span>Adres odbioru: </span>
                <div className="Offert_offert-information">
                  {singleAuction.pickupAddress.city+" "+singleAuction.pickupAddress.address}
                </div>
              </li>
              <li className="Offert_offert-information-all">
                <span>Winda: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.isElevator ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Piętro: </span>{" "}
                <span className="Offert_offert-information"> 3</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Data: </span>
                <span className="Offert_offert-information">
                  {singleAuction.dateOfRemoval}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Godzina: </span>
                <span className="Offert_offert-information">
                  {singleAuction.hourOfRemoval}
                </span>
              </li>

              <li className="Offert_offert-information-all">
                <span>Wniesienie: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.bringFurnitures ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Uwagi: </span>{" "}
                <span className="Offert_offert-information">
                  {singleAuction.comment}
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
                  {singleAuction.deliveryAddress.city+" "+singleAuction.deliveryAddress.address}
                </div>
              </li>
              <li className="Offert_offert-information-all">
                Winda:{" "}
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.isElevator ? "TAK" : "NIE"}
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
            {singleAuction.furnitures.map(furniture => (
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
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.addPrice}
                placeholder="Wpisz swoją wycenę..."
              />
              <div className="Offert_form-title">
                <textarea
                  name="description"
                  value={this.state.commentToPrice}
                  onChange={this.addCommentToPrice}
                  placeholder="Jeśli chcesz dodać komentarz do oferty, wpisz go tutaj..."
                />
              </div>
              <div className="offert-box-buttons">
                <button className="Offert_form-button">Wyślij</button>
                <p className="offert-back" onClick={this.toggleOffert}>
                  Zwiń ->{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withAuth(Offert);
