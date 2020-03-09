import React, { Component } from "react";
import "./right-form.scss";

class RightForm extends Component {
  constructor(props) {
    super(props);

    // this.props.forEach(element => {
    //   console.log(element);
    // });
  }

  render() {
    let cities = null;
    cities = this.props.citiesSuggestion.map((el, index) => {
      return <div>{el}</div>;
    });
    // console.log(this.props);

    return (
      <div className="right-form">
        <h3>Quel est votre trajet ?</h3>
        {cities}
      </div>
    );
  }
}

export default RightForm;
