import React, { Component } from "react";

import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import "./Offerts.css";

class Offerts extends Component {
  state = {
    offerts: [],
    clients: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/offerts.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          offerts: Object.entries(data).map(([id, value]) => ({ id, ...value }))
        })
      );

    fetch(process.env.PUBLIC_URL + "/data/clients.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          clients: data
        })
      );
  }

  render() {
    return (
      <>
        <Header />
        <div className="Offerts">
          <h1 className="offert-header">Oferty przeprowadzek</h1>
          <div>
            <table className="offert-table">
              <thead />
              <tbody>
                {this.state.offerts.map(offert => {
                  const client = this.state.clients[offert.clientId];
                  return (
                    <tr key={offert.id} className="Offerts_table">
                      <td className="offert-table-data">
                        <p className="offerts-title">{offert.name}</p>
                        <ul className="offert-list">
                        <li>
                           <b>
                           <span className="Offerts_list-information"> {client && client.first_name}{" "}
                            {client && client.last_name}</span></b>
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
                            <span className="Offerts_list-information">{offert.date}</span>
                          </li>
                          <li>
                            <b>Wniesienie: </b>
                            <span className="Offerts_list-information">{offert.bringFurnitures ? "Tak" : "Nie"}</span>
                          </li>
                          <li>
                            <Link to={`/offerts/${offert.id}`}>
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
      </>
    );
  }
}

export default Offerts;
