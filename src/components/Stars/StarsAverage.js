import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';
 
class StarsAverage extends Component {
  state = {
    rating: []
  }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }

    
}
 
    render() {
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

export default StarsAverage