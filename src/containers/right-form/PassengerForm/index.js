import React, { Component } from "react";
import Select from "react-select";
import "./passenger-form.scss";

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
        let defaultValue = null;
        if (element.value === "junior") {
          defaultValue = { value: "junior", label: "Jeune (0 - 25)" };
        } else if (element.value === "adulte") {
          defaultValue = { value: "adulte", label: "Adulte (26 - 59)" };
        } else if (element.value === "senior") {
          defaultValue = { value: "senior", label: "Senior (60+)" };
        }

        return (
          <div className="passenger" key={i}>
            <button
              onClick={() => {
                this.props.removed(element.id);
              }}
            >
              X
            </button>
            <Select
              className="select"
              key={element.id}
              defaultValue={defaultValue}
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
      <div className="passengerForm">
        <h3>Choisissez vos passagers</h3>
        <div>
          <ul>{displayPassengers}</ul>
        </div>
        <button className="addPassenger" onClick={this.props.added}>
          Ajouter un autre passager
        </button>
      </div>
    );
  }
}

export default PassengerForm;
