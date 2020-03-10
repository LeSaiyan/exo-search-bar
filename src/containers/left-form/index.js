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
              onFocus={this.props.focusField}
              name="departCity"
              onChange={this.props.change}
              placeholder="Saisissez votre gare de départ..."
              autoComplete="off"
              value={this.props.data.departCity}
            />
          </div>
          <div>
            <input
              onFocus={this.props.focusField}
              name="arrivalCity"
              onChange={this.props.change}
              placeholder="Saisissez votre gare d'arrivée..."
              autoComplete="off"
              value={this.props.data.arrivalCity}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LeftForm;

// const leftForm = props => {
//   return (
//     <div className="left-form">
//       <h3>Quel est votre trajet ?</h3>
//       <form>
//         <div>
//           <input
//             onChange={props.change}
//             placeholder="Saisissez votre gare de départ..."
//             value={props.data.departCity}
//           />
//         </div>
//         <div>
//           <input />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default leftForm;
