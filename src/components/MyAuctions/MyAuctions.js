import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';

class MyAuctions extends Component{
render(){
    return(
        <div className="my-auctions_root">
        <Header />
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
export default MyAuctions;