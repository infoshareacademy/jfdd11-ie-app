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
            
            <div className="Offerts"><h1>Oferty</h1>
            <div>
                <table className="offert-table">
                    <thead></thead>
                    <tbody>
                {this.state.offerts.map(offert => {
                    const client = this.state.clients[offert.clientId]
                    return (
                    <tr key={offert.id}>
                    <td>
                        <b>{offert.name}</b>
                        <ul>
                            <li>Ilość mebli: {offert.countFurniture}</li>
                            <li>Wystawiający: {client && client.first_name} {client && client.last_name}</li>
                            <li><Link to={`/offerts/${offert.id}`}><button>Zobacz ofertę</button></Link></li>
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