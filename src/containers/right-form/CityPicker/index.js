import React from "react";
import "./city-picker.scss";
import locationLogo from "../../../assets/images/pin.png";

const cityPicker = props => {
  let displayCities = null;

  if (props.data.fieldFocus === "departCity") {
    return (
      <div>
        <h3>Quel est votre trajet ?</h3>
        <ul>
          {
            (displayCities = props.data.suggestCities.map((el, i) => {
              return (
                <li
                  style={{ backgroundImage: `url(${locationLogo})` }}
                  key={i}
                  onClick={() => props.choosenDepartCity(el)}
                >
                  {el}
                </li>
              );
            }))
          }
        </ul>
      </div>
    );
  } else if (props.data.fieldFocus === "arrivalCity") {
    return (
      <div>
        <h3>Choisissez une gare d’arrivée</h3>
        <ul>
          {
            (displayCities = props.data.suggestCities.map((el, i) => {
              return (
                <li
                  style={{ backgroundImage: `url(${locationLogo})` }}
                  key={i}
                  onClick={() => props.choosenArrivalCity(el)}
                >
                  {el}
                </li>
              );
            }))
          }
        </ul>
      </div>
    );
  }
};

export default cityPicker;
