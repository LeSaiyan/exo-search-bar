import React, { Component } from "react";
import "./left-form.scss";

class LeftForm extends Component {
  render() {
    console.log(this.props.data.departCity);

    return (
      <div className="left-form">
        <h3>Quel est votre trajet ?</h3>
        <form>
          <div>
            <input
              name="departCity"
              onChange={this.props.change}
              placeholder="Saisissez votre gare de départ..."
              autoComplete="off"
              value={this.props.data.departCity}
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
