import React, { Component } from "react";
import "./DateOfRemoval.css";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import moment from "moment";

import "react-dates/initialize";

import "moment/locale/pl";

moment.locale("pl");
class DateOfRemoval extends Component {
  state = {
    date: moment()
  };

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  saveAndContinue = () => {
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <>
        <div className="padding">Data przeprowadzki:</div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
        />
      </>
    );
  }
}

export default DateOfRemoval;
