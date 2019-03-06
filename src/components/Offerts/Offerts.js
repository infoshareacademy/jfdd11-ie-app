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
                    <tr key={offert.id}>
                      <td className="offert-table-data">
                        <p className="offerts-title">{offert.name}</p>
                        <ul className="offert-list">
                        <li>
                           <b>
                            {client && client.first_name}{" "}
                            {client && client.last_name}</b>
                          </li>
                          <li>
                            <b>Meble: </b>
                            {offert.furnitures.length}
                          </li>
                          
                          <li>
                            <b>Data: </b>
                            {offert.date}
                          </li>
                          <li>
                            <b>Winda: </b>
                            {offert.isElevator ? "Tak" : "Nie"}
                          </li>
                          <li>
                            <b>Wniesienie: </b>
                            {offert.bringFurnitures ? "Tak" : "Nie"}
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
