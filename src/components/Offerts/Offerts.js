import React, { Component } from "react";

import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import "./Offerts.css";
import { withAuth } from "../../contexts/AuthContext";

class Offerts extends Component {
  state = {
    offerts: this.props.authContext.auctions,
    clients: this.props.authContext.users
  };

  render() {
    return (
      <div className="Width_480px">
        <Header />
        <div className="Offerts">
          <h1 className="offert-header">Oferty przeprowadzek</h1>
          <div>
            <table className="offert-table">
              <thead />
              <tbody>
                {this.state.offerts.map(offert => {
                  const client = this.state.clients.find(person=>person.id===offert.clientId);
                  return (
                    <tr key={offert.id} className="Offerts_table">
                      <td className="offert-table-data">
                        <p className="offerts-title">{offert.name}</p>
                        <ul className="offert-list">
                        <li>
                           <b>
                           <span className="Offerts_list-information"> {client && client.name}{" "}
                            {client && client.surname}</span></b>
                          </li>
                          <li><b>Miasto: </b><span className="Offerts_list-information">
                          Gdańsk</span>
                            </li>
                          <li>
                            <b>Meble: </b>
                            <span className="Offerts_list-information">{offert.furnitures.length}</span>
                          </li>
                          
                          <li>
                            <b>Data: </b>
                            <span className="Offerts_list-information">{offert.dateOfRemoval}</span>
                          </li>
                          <li>
                            <b>Wniesienie: </b>
                            <span className="Offerts_list-information">{offert.bringFurnitures ? "Tak" : "Nie"}</span>
                          </li>
                          <li>
                            <Link to={`/offerts/${offert.auctionId}`}>
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuth(Offerts);
