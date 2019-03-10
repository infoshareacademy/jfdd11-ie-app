import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import firebase from "firebase";
import { withAuth } from "../../contexts/AuthContext";
import "./MyAuctions.css";

class MyAuctions extends Component {
  state = {
    auctions: [],
    userId: null,
    offers: [],
    users: []
  };
  componentDidMount() {
    firebase
      .database()
      .ref("auctions")
      .once("value")
      .then(snapshot => snapshot.val())
      .then(data =>
        this.setState({
          userId: this.props.authContext.user.uid,
          auctions: Object.entries(data).map(([id, value]) => ({
            auctionId: id,
            ...value
          })),
          offers: Object.entries(data)
            .map(([id, value]) => ({
              auctionId: id,
              ...value
            }))
            .map(auction => Object.values(auction.offers))
            .flat()
        })
      );
    firebase
      .database()
      .ref("users")
      .once("value")
      .then(snapshot => snapshot.val())
      .then(data =>
        this.setState({
          users: Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          }))
        })
      );
  }
  render() {
    console.log(this.state.userId);
    console.log(this.state.auctions);
    console.log(this.state.offers);
    console.log(this.state.users);
    return (
      <div className="my-auctions_root">
        <Header />
        <h1>Moje oferty</h1>
        <table className="offert-table">
          <thead />
          <tbody>
            {this.state.auctions.map(auction => {
              const client = this.state.users.find(()=>this.state.users.id === auction.clientId);
              return (
                <tr key={auction.auctionId} className="Offerts_table">
                  <td className="offert-table-data">
                    <p className="offerts-title">{auction.name}</p>
                    <ul className="offert-list">
                      <li>
                        <b>
                          <span className="Offerts_list-information">
                            {" "}
                            {client && client.first_name}{" "}
                            {client && client.last_name}
                          </span>
                        </b>
                      </li>
                      <li>
                        <b>Miasto dostarczenia: </b>
                        <span className="Offerts_list-information">{auction.deliveryAddress.city}</span>
                      </li>
                      <li>
                        <b>Meble: </b>
                        <span className="Offerts_list-information">
                          {Object.keys(auction.furnitures).length}
                        </span>
                      </li>

                      <li>
                        <b>Data: </b>
                        <span className="Offerts_list-information">
                          {auction.dateOfRemoval}
                        </span>
                      </li>
                      <li>
                        <b>Wniesienie: </b>
                        <span className="Offerts_list-information">
                          {auction.bringFurnitures ? "Tak" : "Nie"}
                        </span>
                      </li>
                      <li>
                        <Link to={`/offerts/${auction.id}`}>
                          <button className="offert-button">
                            Zobacz ofertę
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

        Widok MyAuctions pobiera offerts.json i wyszukuje w nim id przewoźnika (filter), następnie wyświetla znalezione dane oferty (+ dane autora aukcji).
        
        Przewoźnik może zobaczyć (odfiltrować) przyjęte oferty. Przyciski "przyjęte", "trwające" i "wszystkie".

        Przewoźnik może zobaczyć szcegóły oferty. Główny widok zawiera te same informacje co widok Offerts. Szczegóły oferty to ten sam widok co Offert.

        Przewoźnik może odwołać złożoną ofertę. Odwołanie oferty usuwa z tablicy obiekt z id przewoźnika.

          */}
        <Footer />
      </div>
    );
  }
}
export default withAuth(MyAuctions);
