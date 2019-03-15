import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import "./DateOfRemoval.css";
import { SingleDatePicker } from "react-dates";


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
      < div className= "Width_480px">
       <h1 className="DateOfRemoval_header">Dodawanie zamówienia</h1>
       <h1 className="DateOfRemoval_progress_bar">Pasek postępu</h1>
        <div className ="DateOfRemoval_list-title">Data i godzina przeprowadzki:</div>
        <div className="DateOfRemoval_calender"><SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}/>
          <span className ="DateOfRemoval_hours"><select className="DateOfRemoval_select">
          <option value="00:00">00:00</option>
          <option value="00:00">01:00</option>
          <option value="00:00">02:00</option>
          <option value="00:00">03:00</option>
          <option value="00:00">04:00</option>
          <option value="00:00">05:00</option>
          <option value="00:00">06:00</option>
          <option value="00:00">07:00</option>
          <option value="00:00">08:00</option>
          <option value="00:00">09:00</option>
          <option value="00:00">10:00</option>
          <option value="00:00">11:00</option>
          <option value="00:00">12:00</option>
          <option value="00:00">13:00</option>
          <option value="00:00">14:00</option>
          <option value="00:00">15:00</option>
          <option value="00:00">16:00</option>
          <option value="00:00">17:00</option>
          <option value="00:00">18:00</option>
          <option value="00:00">19:00</option>
          <option value="00:00">20:00</option>
          <option value="00:00">21:00</option>
          <option value="00:00">22:00</option>
          <option value="00:00">23:00</option>
          <option value="00:00">24:00</option>
        </select>
        </span>
        </div>
        <p className="DateOfRemoval_list-title">Uwagi:</p>
        <textarea></textarea>
       <div><button className="DateOfRemoval_back-button" onClick={this.back}>
          Wstecz
        </button>
        <button
          className="DateOfRemoval_next-button"
          type={"submit"}
          onClick={this.saveAndContinue}>
       Dalej
        </button></div>
      </div>
    );
  }
}

export default DateOfRemoval;
