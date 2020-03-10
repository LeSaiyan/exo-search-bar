import React, { Component } from "react";
import "./right-form.scss";

class RightForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayCities = null;

    console.log(this.props.data.fieldFocus);

    if ((this.props.data.fieldFocus = "departCity")) {
      displayCities = this.props.data.suggestCities.map((el, index) => {
        return (
          // <h3>Quel est votre trajet ?</h3>
          <div key={index} onClick={() => this.props.choosenDepartCity(el)}>
            {el}
          </div>
        );
      });
    } else if ((this.props.data.fieldFocus = "arrivalCity")) {
      displayCities = this.props.data.suggestCities.map((el, index) => {
        return (
          <div key={index} onClick={() => this.props.choosenArrivalCity(el)}>
            <h3>Quel est votre trajet ?</h3>

            {el}
          </div>
        );
      });
    }

    return <div className="right-form">{displayCities}</div>;
  }
}

export default RightForm;
