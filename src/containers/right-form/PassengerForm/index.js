import React, { Component } from "react";
import Select from "react-select";

class PassengerForm extends Component {
  options = [
    { value: "junior", label: "Jeune (0 - 25)" },
    { value: "adulte", label: "Adulte (26 - 59)" },
    { value: "senior", label: "Senior (60+)" }
  ];
  render() {
    let displayPassengers = null;

    displayPassengers = Object.values(this.props.data.passengers).map(
      (element, i) => {
        return (
          <div>
            <button onClick={this.props.removed}>X</button>
            <Select
              key={element.id}
              defaultValue={}
              options={this.options}
              onChange={event => {
                this.props.changed(event, element.id);
              }}
            />

            <div>
              <button>Cartes et abonnements</button>
            </div>
          </div>
        );
      }
    );

    return (
      <div>
        <h3>Choisissez vos passagers</h3>
        <div>
          <ul>{displayPassengers}</ul>
          <button onClick={this.props.added}>
            <span>Ajouter un autre passager</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PassengerForm;
