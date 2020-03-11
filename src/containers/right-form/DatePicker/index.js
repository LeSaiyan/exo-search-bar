import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./date-picker.scss";

class DatePicker extends Component {
  dateTimePick = null;
  time = ["6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"];

  dateTimePick = this.time.map((element, i) => {
    return (
      <time key={i} dateTime={element} onClick={this.props.clicked}>
        {element}
      </time>
    );
  });

  // expected output: Thursday, December 20, 2012 (varies according to default locale)

  render() {
    return (
      <div className="">
        <h3>Choisissez la date du départ</h3>
        <div className="calendar-container">
          <Calendar className="calendar" onChange={this.props.changed} />
          <hr></hr>
          <div className="datetime">{this.dateTimePick}</div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
