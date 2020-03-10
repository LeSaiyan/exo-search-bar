import React, { Component } from "react";
import "./right-form.scss";
import CityPicker from "./CityPicker";

class RightForm extends Component {
  render() {
    return (
      <div>
        <CityPicker
          data={this.props.data}
          choosenArrivalCity={this.props.choosenArrivalCity}
          choosenDepartCity={this.props.choosenDepartCity}
        />
      </div>
    );
  }
}

export default RightForm;
