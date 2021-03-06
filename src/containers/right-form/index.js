import React, { Component } from "react";
import "./right-form.scss";
import CityPicker from "./CityPicker";
import DatePicker from "./DatePicker";
import PassengerForm from "./PassengerForm";

class RightForm extends Component {
  render() {
    return (
      <div className="right-form">
        {this.props.data.fieldFocus === "arrivalCity" ||
        this.props.data.fieldFocus === "departCity" ||
        this.props.data.fieldFocus === "intermediateCity" ? (
          <CityPicker
            data={this.props.data}
            choosenArrivalCity={this.props.choosenArrivalCity}
            choosenDepartCity={this.props.choosenDepartCity}
            addIntermediateCity={this.props.addIntermediateCity}
            choosenIntermediateCity={this.props.choosenIntermediateCity}
          />
        ) : (
          <div></div>
        )}

        {this.props.data.fieldFocus === "startDate" ||
        this.props.data.fieldFocus === "endDate" ? (
          <DatePicker
            changed={this.props.changeDate}
            clicked={this.props.changeHour}
            data={this.props.data}
            reset={this.props.reset}
          />
        ) : (
          <div></div>
        )}

        {this.props.data.fieldFocus === "passengers" ? (
          <PassengerForm
            changed={this.props.test}
            data={this.props.data}
            removed={this.props.remove}
            added={this.props.add}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RightForm;
