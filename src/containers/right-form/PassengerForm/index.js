import React from "react";

const passengerForm = props => {
  console.log(props.data.passengers);

  console.log(props.data.passengers);

  let displayPassengers = Object.keys(props.data.passengers).reduce(
    (arr, key) => {
      const amount = props.data.passengers[key];
      return amount > 0
        ? [
            ...arr,
            [...Array(amount)].map(index => (
              <li key={key}>
                <div>
                  <select>
                    <option value="Jeune">Jeune (0 - 25)</option>
                    <option value="Adulte">Adulte (26 - 59)</option>
                    <option value="Senior">Senior (60+)</option>
                  </select>
                </div>
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
