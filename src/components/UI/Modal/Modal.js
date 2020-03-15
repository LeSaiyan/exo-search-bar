import React, { Component } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    console.log(this.props.data);

    let juniorList = this.props.data.passengers.filter(el => {
      return el.value === "junior";
    });

    let adultList = this.props.data.passengers.filter(el => {
      return el.value === "adulte";
    });

    let seniorList = this.props.data.passengers.filter(el => {
      return el.value === "senior";
    });

    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div>
            <h3>Voici le resumé de votre trajet :</h3>
            <ul>
              {this.props.data.departCity ? (
                <li>Départ de : {this.props.data.departCity}</li>
              ) : null}
              {this.props.data.intermediateCity ? (
                <li>Avec un arrêt à : {this.props.data.intermediateCity}</li>
              ) : null}
              {this.props.data.arrivalCity ? (
                <li>Arrivée à : {this.props.data.arrivalCity}</li>
              ) : null}
              {this.props.data.startHour ? (
                <li>Départ à : {this.props.data.startHour}</li>
              ) : null}
              {this.props.data.startDate ? (
                <li>Le : {this.props.data.startDate}</li>
              ) : null}
              {this.props.data.endHour ? (
                <li>Arrivée à : {this.props.data.endHour}</li>
              ) : null}
              {this.props.data.endDate ? (
                <li>Le : {this.props.data.endDate}</li>
              ) : null}
              {this.props.data.passengers ? (
                <li>
                  {juniorList.length >= 1 ? (
                    <p>{juniorList.length} Junior(s)</p>
                  ) : null}

                  {adultList.length >= 1 ? (
                    <p>{adultList.length} Adulte(s)</p>
                  ) : null}
                  {seniorList.length >= 1 ? (
                    <p>{seniorList.length} Sénior(s)</p>
                  ) : null}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
