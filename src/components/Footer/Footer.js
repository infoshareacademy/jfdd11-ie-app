import React, { Component } from "react";
import "./Footer.css";
import Logo from "./logo_footer.png";
class Footer extends Component {
  render() {
    return (
        <div className="footer-global-settings">
          <div className="footer-box">
            <p className="footer-moveIt">moveIt</p>
            <p>
              Adres e-mail: <a className="footer-send-email" href="mailto:support@move.it">support@move.it</a>
            </p>
            <p className="footer-copyright">Copyright © Move-It 2019</p>
          </div>
          <img className="footer-logo" src={Logo} alt="moveIt logo - flying couch" />
        </div>
    );
  }
}
export default Footer;
