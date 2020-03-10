import React, { Component } from "react";
import "./right-form.scss";

class RightForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayCities = null;

    console.log(this.props.data.fieldFocus);

    if (this.props.data.fieldFocus === "departCity") {
      return (
        <div className="right-form">
          <h3>Quel est votre trajet ?</h3>

          {
            (displayCities = this.props.data.suggestCities.map((el, index) => {
              return (
                <div>
                  <div
                    key={index}
                    onClick={() => this.props.choosenDepartCity(el)}
                  >
                    {el}
                  </div>
                </div>
              );
            }))
          }
        </div>
      );
    } else if (this.props.data.fieldFocus === "arrivalCity") {
      return (
        <div className="right-form">
          <h3>Choisissez une gare d’arrivée</h3>
          {
            (displayCities = this.props.data.suggestCities.map((el, index) => {
              return (
                <div>
                  <div
                    key={index}
                    onClick={() => this.props.choosenArrivalCity(el)}
                  >
                    {el}
                  </div>
                </div>
              );
            }))
          }
        </div>
      );
    }
    return <div>{displayCities}</div>;
  }
}

export default RightForm;
