import React, { Component } from "react";
import "./left-form.scss";

class LeftForm extends Component {
  render() {
    let test = this.props.data.departCity;

    // let value;
    // if (test) {
    //   value = this.props.data.departCity;
    // } else if (this.props.data.departCity === "") {
    //   value = null;
    // }

    // console.log(this.props.data.departCity);

    return (
      <div className="left-form">
        <h3>Quel est votre trajet ?</h3>
        <form>
          <div>
            <input
              onChange={this.props.change}
              placeholder="Saisissez votre gare de départ..."
              //   value={this.props.data.departCity}
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
