import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./date-picker.scss";

const datePicker = props => {
  let dateTimePick = null;
  let time = ["6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"];

  dateTimePick = time.map((element, i) => {
    return (
      <time key={i} dateTime={element} onClick={props.clicked}>
        {element}
      </time>
    );
  });

  let displayDates = null;

  if (props.data.fieldFocus === "startDate") {
    return (
      <div>
        <h3>Choisissez la date du départ</h3>
        <div className="calendar-container">
          <Calendar className="calendar" onChange={props.changed} />
          <hr></hr>
          <div className="datetime">{dateTimePick}</div>
        </div>
      </div>
    );
  } else if (props.data.fieldFocus === "endDate") {
    return (
      <div>
        <h3>Choisissez la date du retour</h3>
        <button onClick={props.reset}>Pas de retour</button>
        <div className="calendar-container">
          <Calendar className="calendar" onChange={props.changed} />
          <hr></hr>
          <div className="datetime">{dateTimePick}</div>
        </div>
      </div>
    );
  }

  return <div> {displayDates} </div>;
};

export default datePicker;
