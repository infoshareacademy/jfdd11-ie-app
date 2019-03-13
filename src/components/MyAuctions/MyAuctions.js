import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { withAuth } from "../../contexts/AuthContext";
import "./MyAuctions.css";

class MyAuctions extends Component {
  state = {
    auctions: this.props.authContext.auctions,
    userId: this.props.authContext.user.uid,
    offers: this.props.authContext.offers,
    users: this.props.authContext.users
  };
  filterAccepted = () => {
    this.setState({
      offers: this.props.authContext.offers.filter(
        offer => offer.chosen === true
      )
    });
  };
  filterPending = () => {
    this.setState({
      offers: this.props.authContext.offers.filter(
        offer => offer.chosen === false
      )
    });
  };
  filterAll = () => {
    this.setState({
      offers: this.props.authContext.offers
    });
  };
  render() {
    const filterdOffers = this.state.offers.filter(
      offer => offer.carrierId === this.state.userId
    );

    console.log("user id: " + this.state.userId);
    console.log(this.state.auctions);
    console.log(this.state.offers);
    console.log(this.state.users);
    console.log(filterdOffers);
    return (
      <div className="my-offers_root Width_480px">
        <Header />
        <h1 className="myAuctions_title">Moje oferty</h1>
        <div className="myAuctions_filters">
        <button onClick={() => this.filterAll()}>wszystkie</button>
        <button onClick={() => this.filterAccepted()}>przyjęte</button>
        <button onClick={() => this.filterPending()}>oczekujące</button>
        </div>
        {filterdOffers !== [] ? (
          <table className="offert-table">
            <thead />
            <tbody>
              {filterdOffers.map(offer => {
                const client = this.state.users.find(
                  user => user.id === offer.clientId
                );
                const auction = this.state.auctions.find(
                  auction => auction.auctionId === offer.auctionId
                );
                console.log(client);
                console.log(auction);
                return (
                  <tr
                    key={auction && auction.auctionId}
                    className="Offerts_table"
                  >
                    <td className="offert-table-data">
                      <p className="offerts-title">{auction && auction.name}</p>
                      <ul className="offert-list">
                        <li>
                          Imię i nazwisko:
                          <b>
                            <span className="Offerts_list-information">
                              {" "}
                              {client && client.name} {client && client.surname}
                            </span>
                          </b>
                        </li>
                        <li>
                          <b>Miasto dostarczenia: </b>
                          <span className="Offerts_list-information">
                            {auction && auction.deliveryAddress.city}
                          </span>
                        </li>
                        <li>
                          <b>Liczba mebli: </b>
                          <span className="Offerts_list-information">
                            {auction && Object.keys(auction.furnitures).length}
                          </span>
                        </li>

                        <li>
                          <b>Data: </b>
                          <span className="Offerts_list-information">
                            {auction && auction.dateOfRemoval}
                          </span>
                        </li>
                        <li>
                          <b>Usługa wniesienia: </b>
                          <span className="Offerts_list-information">
                            {auction && auction.bringFurnitures ? "Tak" : "Nie"}
                          </span>
                        </li>
                        <li>
                          Twoja oferta:
                          <span className="Offerts_list-information">
                            {offer && offer.price} zł
                          </span>
                        </li>
                        <li>
                          <span className="Offerts_list-information">
                            {offer.chosen
                              ? "Twoja oferta została zaakceptowana"
                              : "Twoja oferta oczekuje na akceptację"}
                          </span>
                        </li>
                        <li>
                          <Link to={`/myauctions/${offer.offerId}`}>
                            <button className="offert-button">Szczegóły</button>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="MyAuctions_offer">nie ma ofert</h1>
        )}
        {/* 
        
        Przewoźnik licytując aukcję dodaje do offerts.json obiekt, który jest elementem tablicy. 

        Przewoźnik może zobaczyć szcegóły oferty. Główny widok zawiera te same informacje co widok Offerts. Szczegóły oferty to ten sam widok co Offert.

        Przewoźnik może odwołać złożoną ofertę. Odwołanie oferty usuwa z tablicy obiekt z id przewoźnika.

          */}
        <Footer />
      </div>
    );
  }
}
export default withAuth(MyAuctions);
