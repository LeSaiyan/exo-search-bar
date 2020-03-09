import React, { Component } from "react";
import "./left-form.scss";

class LeftForm extends Component {
  render() {
    let value;
    if (this.props.data.departCity !== "") {
      value = this.props.data.departCity;
    } else if (this.props.data.departCity === "") {
      value = null;
    }

    console.log(this.props.data.departCity);

    return (
      <div className="left-form">
        <h3>Quel est votre trajet ?</h3>
        <form>
          <div>
            <input
              onChange={this.props.change}
              placeholder="Saisissez votre gare de départ..."
              value={value}
            />
          </div>
          <div>
            <input />
          </div>
        </form>
      </div>
    );
  }
}

export default LeftForm;
