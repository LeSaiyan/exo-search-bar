import React, { Component } from "react";
import "./right-form.scss";

class RightForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cities = null;
    cities = this.props.citiesSuggestion.map((el, index) => {
      return (
        <div key={index} onClick={() => this.props.choosenCity(el)}>
          {el}
        </div>
      );
    });

    return (
      <div className="right-form">
        <h3>Quel est votre trajet ?</h3>
        {cities}
      </div>
    );
  }
}

export default RightForm;
