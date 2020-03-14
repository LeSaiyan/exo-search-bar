import React from "react";
import "./city-picker.scss";
import locationLogo from "../../../assets/images/pin.png";
import viaLogo from "../../../assets/images/via.png";

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
        {props.data.intermediateCity !== null ? (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            supprimer le via
          </button>
        ) : (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            VIA
          </button>
        )}
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
        {props.data.intermediateCity !== null ? (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            supprimer le via
          </button>
        ) : (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            VIA
          </button>
        )}
      </div>
    );
  } else if (props.data.fieldFocus === "intermediateCity") {
    return (
      <div>
        <h3>Choisissez une gare intermédiaire</h3>
        <ul>
          {
            (displayCities = props.data.suggestCities.map((el, i) => {
              return (
                <li
                  style={{ backgroundImage: `url(${locationLogo})` }}
                  key={i}
                  onClick={() => props.choosenIntermediateCity(el)}
                >
                  {el}
                </li>
              );
            }))
          }
        </ul>
        {props.data.intermediateCity !== null ? (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            supprimer le via
          </button>
        ) : (
          <button
            className="via"
            onClick={() => props.addIntermediateCity()}
            style={{ backgroundImage: `url(${viaLogo})` }}
          >
            VIA
          </button>
        )}
      </div>
    );
  }
};

export default cityPicker;
