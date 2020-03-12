import React from "react";
// import ReactSelect from "react-select";
import Select from "react-select";

const options = [
  { value: "Junior", label: "Jeune (0 - 25)" },
  { value: "Adulte", label: "Adulte (26 - 59)" },
  { value: "Senior", label: "Senior (60+)" }
];

const passengerForm = props => {
  let displayPassengers = Object.keys(props.data.passengers).reduce(
    (arr, key) => {
      console.log(key);
      console.log(props.data.passengers[key]);
      console.log(props.data.passengers);

      let value = null;
      if (key === "Junior") {
        value = { value: "Junior", label: "Jeune (0 - 25)" };
      } else if (key === "Adulte") {
        value = { value: "Adulte", label: "Adulte (26 - 59)" };
      } else if (key === "Senior") {
        value = { value: "Senior", label: "Senior (60+)" };
      }

      const amount = props.data.passengers[key];
      return amount > 0
        ? [
            ...arr,
            [...Array(amount)].map(i => (
              <li key={i}>
                <button name={key} onClick={props.removed}>
                  X
                </button>
                <Select
                  defaultValue={value}
                  options={options}
                  onChange={event => {
                    props.changed(event);
                  }}
                />

                <div>
                  <button>Cartes et abonnements</button>
                </div>
              </li>
            ))
          ]
        : arr;
    },
    []
  );

  return (
    <div>
      <h3>Choisissez vos passagers</h3>
      <div>
        <ul>{displayPassengers}</ul>
        <button>
          <span>Ajouter un autre passager</span>
        </button>
      </div>
    </div>
  );
};

export default passengerForm;
