import React, { Component } from "react";
import './Footer.css';
import Logo from './logo_footer.png';
class Footer extends Component{

    render(){
        return(
<div className="global-settings">

<div className="footer-box">
<p className="contact">Kontakt</p>
<p className="moveIt">moveIt</p>
<p>Adres e-mail: <a href="mailto:support@move.it">support@move.it</a></p>
</div>
<img src={Logo} />
</div>
        );
    }
}
export default Footer;