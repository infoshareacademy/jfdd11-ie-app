import React, { Component } from "react";

import "./Offert.css";

class Offert extends Component {

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
    const { offertId } = this.props.match.params;
    return (
      <div className="Offerts">
        <h1>Oferta {offertId}</h1>
      </div>
    );
  }
}

export default Offert;
