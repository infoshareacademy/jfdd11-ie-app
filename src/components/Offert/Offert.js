import React, { Component } from "react";

import "./Offert.css";

class Offert extends Component {
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
