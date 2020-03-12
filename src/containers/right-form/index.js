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
            data={this.props.data}
            reset={this.props.reset}
          />
        ) : (
          <div></div>
        )}

        {this.props.data.fieldFocus === "passengers" ? (
          <PassengerForm
            // values={companyStatus}
            // label="Company Status"
            changed={this.props.test}
            data={this.props.data}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RightForm;
