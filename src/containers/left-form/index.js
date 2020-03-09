import React, { Component } from "react";
import "./left-form.scss";

class LeftForm extends Component {
  render() {
    return (
      <div className="left-form">
        <h3>Quel est votre trajet ?</h3>
        <form>
          <div>
            <input
              onChange={this.props.change}
              placeholder="Saisissez votre gare de départ..."
            />
          </div>
          <div>
            <input />
          </div>
        </form>
        <button onClick={this.props.click}>ok</button>
      </div>
    );
  }
}

export default LeftForm;
