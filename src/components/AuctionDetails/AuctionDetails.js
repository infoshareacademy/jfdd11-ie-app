import React, {Component} from 'react';
import { getOffersPromise } from '../../serivices';
import Header from '../Header';
import Footer from '../Footer';
class AuctionDetails extends Component{
    state ={
        offer: null
    }
    componentDidMount() {
        }
    render(){
        
        return(
            <>
            <Header/>
        <h1>hello!</h1>
        <Footer/>
        </>
        )
    }
    
}
export default AuctionDetails;