import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';
 
class Stars extends Component {
  state = {
    rating: 4
  }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="#f8c512"
          numberOfStars={5}
          name='rating'
          starDimension="35px"
          starSpacing="7px"

        />
      );
    }
}

export default Stars
 