import React, { Component } from "react";

import "./left-form.scss";
import "../../assets/sass/global.scss";

import departLogo from "../../assets/images/departures.png";
import arrivalLogo from "../../assets/images/arrival.png";
import changeLogo from "../../assets/images/change.png";
import calendarLogo from "../../assets/images/calendar.png";
import passengerLogo from "../../assets/images/user.png";
import plusLogo from "../../assets/images/plus.png";
import travelogo from "../../assets/images/travel.png";

class LeftForm extends Component {
  render() {
    return (
      <div className="left-form">
        <h3>Quel est votre trajet ?</h3>
        <form>
          <div className="cityFields">
            <div
              className="departField"
              style={{ backgroundImage: `url(${departLogo})` }}
            >
              <input
                onFocus={this.props.focusField}
                name="departCity"
                onChange={this.props.change}
                placeholder="Saisissez votre gare de départ..."
                autoComplete="off"
                value={this.props.data.departCity}
              />
            </div>
            {this.props.data.intermediateCity !== null ? (
              <div
                className="departField"
                style={{ backgroundImage: `url(${travelogo})` }}
              >
                <input
                  onFocus={this.props.focusField}
                  name="intermediateCity"
                  onChange={this.props.change}
                  placeholder="Via"
                  autoComplete="off"
                  value={this.props.data.intermediateCity}
                />
              </div>
            ) : null}
            <div
              className="departField"
              style={{ backgroundImage: `url(${arrivalLogo})` }}
            >
              <input
                onFocus={this.props.focusField}
                name="arrivalCity"
                onChange={this.props.change}
                placeholder="Saisissez votre gare d'arrivée..."
                autoComplete="off"
                value={this.props.data.arrivalCity}
              />
            </div>
            <div className="change" onClick={this.props.changeValue}>
              <img src={changeLogo} alt="Logo" />
            </div>
          </div>

          <div className="cityFields">
            <div
              className="departField"
              style={{ backgroundImage: `url(${calendarLogo})` }}
            >
              <input
                onFocus={this.props.focusField}
                name="startDate"
                placeholder="Aller"
                type="button"
                value={this.props.data.startDate}
              />
              {this.props.data.startHour ? (
                <span>à partir de {this.props.data.startHour}</span>
              ) : null}
            </div>
            <div
              className="departField"
              style={{ backgroundImage: `url(${calendarLogo})` }}
            >
              <input
                onFocus={this.props.focusField}
                name="endDate"
                placeholder="Retour"
                type="button"
                value={this.props.data.endDate}
              />
              {this.props.data.endHour ? (
                <span>à partir de {this.props.data.endHour}</span>
              ) : null}
            </div>
          </div>

          <div onFocus={this.props.focusField} className="passengersField">
            <div style={{ backgroundImage: `url(${passengerLogo})` }}>
              <input name="passengers" type="button" />
            </div>
            <button
              style={{ backgroundImage: `url(${plusLogo})` }}
              disabled
            ></button>
          </div>
        </form>

        <button onClick={this.props.resume} className="green-btn">
          Rechercher
        </button>
      </div>
    );
  }
}

export default LeftForm;
