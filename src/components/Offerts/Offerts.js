import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Offerts.css';

class Offerts extends Component {

    state = {
        offerts: [],
        clients: [],
    }
    
componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/data/offerts.json')
    .then(response => response.json())
    .then(data => this.setState({ 
        offerts: Object.entries(data).map(([id, value]) => ({ id, ...value })) 
    }))

    fetch(process.env.PUBLIC_URL + '/data/clients.json')
    .then(response => response.json())
    .then(data => this.setState({
        clients: data
    }))
}



    render() {
        return (
            
            <div className="Offerts"><h1 className="offert-header">Oferty</h1>
            <div>
                <table className="offert-table">
                    <thead></thead>
                    <tbody>
                {this.state.offerts.map(offert => {
                    const client = this.state.clients[offert.clientId]
                    return (
                    <tr key={offert.id}>
                    <td className="offert-table-data">
                        <p className="offert-title">{offert.name}</p>
                        <ul className="offert-list">
                            <li><b>Ilość mebli: </b>{offert.countFurniture}</li>
                            <li><b>Wystawiający: </b>{client && client.first_name} {client && client.last_name}</li>
                            <li><b>Termin: </b>{offert.date}</li>
                            <li><b>Dystans: </b>{offert.distance} km</li>
                            <li><b>Budynek z windą: </b>{offert.isElevator ? "Tak" : "Nie"}</li>
                            <li><b>Usługa z wniesieniem: </b>{offert.bringFurnitures ? "Tak" : "Nie"}</li>
                            <li><Link to={`/offerts/${offert.id}`}><button className="offert-button">Zobacz ofertę</button></Link></li>
                            <li><span className="bottom-line"></span></li>
                        </ul>
                    </td>
                    </tr>
                )})}
                </tbody>
                </table>
            </div>
            
            
            </div>
        );
    }
}
  
export default Offerts;