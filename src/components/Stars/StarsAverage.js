import React, {Component} from 'react'

import StarRatings from 'react-star-ratings';


class StarsAverage extends Component {
    render() {
      // aggregateRating = 2.35;
      return (
        <StarRatings
          rating={4}
          starDimension="25px"
          starSpacing="20px"
        />
      );
    }
  }
  export default StarsAverage