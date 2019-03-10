import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import firebase from 'firebase';
import { withAuth } from "../../contexts/AuthContext";
import "./MyAuctions.css"


class MyAuctions extends Component{
  
  state ={
    auctions: null,
    userId: null
  }
  componentDidMount() {
    
    firebase
    .database()
    .ref("auctions")
    .once("value")
    .then(snapshot => snapshot.val())
    .then(data =>this.setState({
      userId: this.props.authContext.user.uid,
      auctions: Object.entries(data).map(([id, value]) => ({
        auctionId: id,
        ...value
      })),
      offers: Object.entries(data).map(([id, value]) => ({
        auctionId: id,
        ...value
      })).map(auction => Object.values(auction.offers)).flat()
    })
    
  )
    
  }
render(){
  console.log(this.state.userId)
  console.log(this.state.auctions)
  console.log(this.state.offers)
    return(
        <div className="my-auctions_root">
        <Header />
        <p className="MyAuctions_offer">Twoja oferta}</p>
        <p>ss</p>
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
    )
}

}
export default withAuth(MyAuctions);