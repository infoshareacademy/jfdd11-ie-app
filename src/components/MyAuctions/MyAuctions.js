import React, { Component } from "react";
import { getUsersPromise, getOffersPromise } from "../../serivices";
import { getAuctionsPromise } from "../../serivices";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import firebase from "firebase";
import { withAuth } from "../../contexts/AuthContext";
import "./MyAuctions.css";

class Myoffers extends Component {
  state = {
    auctions: [],
    userId: null,
    offers: [],
    users: []
  };
  componentDidMount() {
    getAuctionsPromise().then(data =>
      this.setState({
        userId: this.props.authContext.user.uid,
        auctions: Object.entries(data).map(([id, value]) => ({
          auctionId: id,
          ...value
        }))
      })
    );
    getOffersPromise().then(data =>
      this.setState({
        offers: Object.entries(data).map(([id, value]) => ({
          offerId: id,
          ...value
        }))
      })
    );
    getUsersPromise().then(data =>
      this.setState({
        users: Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }))
      })
    );
  }
  render() {
    console.log("user id: " + this.state.userId);
    console.log(this.state.auctions);
    console.log(this.state.offers);
    console.log(this.state.users);
    return (
      <div className="my-offers_root">
        <Header />
        <h1>Moje oferty</h1>
        <table className="offert-table">
          <thead />
          <tbody>
            {this.state.offers.filter(offer => offer.carrierId === this.state.userId).map(offer => {
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
                          {offer.chosen?"Twoja oferta została zaakceptowana":"Twoja oferta oczekuje na akceptację"}
                        </span>
                      </li>
                      <li>
                        <Link to={`/offerts/${offer.id}`}>
                          <button className="offert-button">
                            Szczegóły
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        
        Przewoźnik licytując aukcję dodaje do offerts.json obiekt, który jest elementem tablicy. 

        Obiekt zawiera zaproponowaną kwotę, datę złożenia oferty, nr id przewoźnika oraz czy oferta została przyjęta.

        Widok Myoffers pobiera offerts.json i wyszukuje w nim id przewoźnika (filter), następnie wyświetla znalezione dane oferty (+ dane autora aukcji).
        
        Przewoźnik może zobaczyć (odfiltrować) przyjęte oferty. Przyciski "przyjęte", "trwające" i "wszystkie".

        Przewoźnik może zobaczyć szcegóły oferty. Główny widok zawiera te same informacje co widok Offerts. Szczegóły oferty to ten sam widok co Offert.

        Przewoźnik może odwołać złożoną ofertę. Odwołanie oferty usuwa z tablicy obiekt z id przewoźnika.

          */}
        <Footer />
      </div>
    );
  }
}
export default withAuth(Myoffers);
