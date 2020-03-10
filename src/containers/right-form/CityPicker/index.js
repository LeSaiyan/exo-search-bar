import React from "react";

const cityPicker = props => {
  let displayCities = null;
  console.log(props.data.fieldFocus);

  if (props.data.fieldFocus === "departCity") {
    return (
      <div className="right-form">
        <h3>Quel est votre trajet ?</h3>

        {
          (displayCities = props.data.suggestCities.map((el, index) => {
            return (
              <div>
                <div key={index} onClick={() => props.choosenDepartCity(el)}>
                  {el}
                </div>
              </div>
            );
          }))
        }
      </div>
    );
  } else if (props.data.fieldFocus === "arrivalCity") {
    return (
      <div className="right-form">
        <h3>Choisissez une gare d’arrivée</h3>
        {
          (displayCities = props.data.suggestCities.map((el, index) => {
            return (
              <div>
                <div key={index} onClick={() => props.choosenArrivalCity(el)}>
                  {el}
                </div>
              </div>
            );
          }))
        }
      </div>
    );
  }
  return <div>{displayCities}</div>;
};

export default cityPicker;
