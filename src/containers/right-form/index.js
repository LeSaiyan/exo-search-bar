import React, { Component } from "react";
import "./right-form.scss";
import CityPicker from "./CityPicker";
import DatePicker from "./DatePicker";

class RightForm extends Component {
  render() {
    return (
      <div className="right-form">
        {this.props.data.fieldFocus === "arrivalCity" ||
        this.props.data.fieldFocus === "departCity" ? (
          <CityPicker
            data={this.props.data}
            choosenArrivalCity={this.props.choosenArrivalCity}
            choosenDepartCity={this.props.choosenDepartCity}
          />
        ) : (
          <div></div>
        )}

        {this.props.data.fieldFocus === "startDate" ||
        this.props.data.fieldFocus === "endDate" ? (
          <DatePicker
            changed={this.props.changeDate}
            clicked={this.props.changeHour}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RightForm;
