import React, { Component } from "react";
import "./home.scss";
import background from "../../assets/images/green-palm-trees-near-sea-under-blue-sky-3601456.jpg";
import LeftForm from "../left-form";
import axios from "axios";
import RightForm from "../right-form";
import nextId from "react-id-generator";
import Modal from "../../components/UI/Modal/Modal";

class Home extends Component {
  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  state = {
    departCity: "",
    arrivalCity: "",
    intermediateCity: null,
    fieldFocus: "",
    suggestCities: [],
    startDate: "",
    startHour: "",
    endDate: "",
    endHour: "",
    passengers: [
      {
        value: "adulte",
        id: nextId()
      }
    ],
    resume: false
  };

  citiesName = [];

  componentDidMount() {
    this.getPopularCities();
  }

  getPopularCities = () => {
    axios.get("https://api.comparatrip.eu/cities/popular/5").then(res => {
      Object.values(res.data).forEach(element => {
        this.citiesName.push(element.unique_name);
        this.setState({ suggestCities: this.citiesName });
      });
    });
  };

  getPopularCitiesArrival = city => {
    let citiesName = [];

    axios
      .get(`https://api.comparatrip.eu/cities/popular/from/${city}/5`)
      .then(res => {
        Object.values(res.data).forEach(element => {
          citiesName.push(element.unique_name);
          this.setState({ suggestCities: citiesName });
        });
      });
  };

  suggestHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.value === "") {
      if (
        this.state.fieldFocus === "arrivalCity" ||
        this.state.fieldFocus === "intermediateCity"
      ) {
        if (this.state.departCity) {
          this.getPopularCitiesArrival(this.state.departCity);
        }
      }
      this.setState({ suggestCities: this.citiesName });
    } else if (event.target.value !== "") {
      axios
        .get(
          "https://api.comparatrip.eu/cities/autocomplete/?q=" +
            event.target.value
        )
        .then(res => {
          let citiesName = [];
          Object.values(res.data).forEach(element => {
            citiesName.push(element.unique_name);
            this.setState({ suggestCities: citiesName });
          });
        });
    }
  };

  addIntermediateCity = () => {
    if (this.state.intermediateCity == null)
      this.setState({ intermediateCity: "" });
    else if (this.state.intermediateCity !== null) {
      this.setState({ intermediateCity: null });
    }
  };

  departChoosenCity = city => {
    this.setState({ departCity: city });
  };

  arrivalChoosenCity = city => {
    this.setState({ arrivalCity: city });
  };

  intermediateChoosenCity = city => {
    this.setState({ intermediateCity: city });
  };

  focusFieldHandler = event => {
    event.preventDefault();

    this.setState({ fieldFocus: event.target.name });

    if (
      event.target.name === "arrivalCity" ||
      event.target.name === "intermediateCity"
    ) {
      if (this.state.departCity) {
        this.getPopularCitiesArrival(this.state.departCity);
      }
    }
  };

  changeDepartArrivalHandler = e => {
    e.preventDefault();

    let departCity = this.state.departCity;
    let arrivalCity = this.state.arrivalCity;

    this.setState({ departCity: arrivalCity });
    this.setState({ arrivalCity: departCity });
  };

  onChangeDate = event => {
    if (this.state.fieldFocus === "startDate") {
      this.setState({
        startDate: event.toLocaleDateString(undefined, this.options)
      });
    } else if (this.state.fieldFocus === "endDate") {
      this.setState({
        endDate: event.toLocaleDateString(undefined, this.options)
      });
    }
  };

  onChangeHour = event => {
    if (this.state.fieldFocus === "startDate") {
      this.setState({
        startHour: event.target.dateTime
      });
    } else if (this.state.fieldFocus === "endDate") {
      this.setState({
        endHour: event.target.dateTime
      });
    }
  };

  resetEndHandler = event => {
    this.setState({
      endDate: null,
      endHour: null
    });
  };

  onSelectChange = (event, id) => {
    const updatedPassengers = [...this.state.passengers];

    updatedPassengers.map(element => {
      if (element.id === id) {
        element.value = event.value;
      }
    });

    this.setState({ passengers: updatedPassengers });
  };

  addPassenger = event => {
    const updatedPassengers = [...this.state.passengers];

    updatedPassengers.push({ value: "adulte", id: nextId() });

    this.setState({ passengers: updatedPassengers });
  };

  removePassenger = id => {
    const passengers = [...this.state.passengers];

    if (passengers.length > 1) {
      const updatedPassengers = passengers.filter(passenger => {
        return passenger.id !== id;
      });
      this.setState({ passengers: updatedPassengers });
    }
  };

  openModal = () => {
    this.setState({ resume: true });
  };
  closeModal = () => {
    this.setState({ resume: false });
  };

  render() {
    console.log(this.state);

    return (
      <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <Modal
          show={this.state.resume}
          modalClosed={this.closeModal}
          data={this.state}
        />
        <div className="fullForm">
          <LeftForm
            data={this.state}
            change={event => this.suggestHandler(event)}
            focusField={event => this.focusFieldHandler(event)}
            changeValue={this.changeDepartArrivalHandler}
            resume={this.openModal}
          />
          <RightForm
            data={this.state}
            choosenDepartCity={this.departChoosenCity}
            choosenArrivalCity={this.arrivalChoosenCity}
            choosenIntermediateCity={this.intermediateChoosenCity}
            addIntermediateCity={this.addIntermediateCity}
            changeDate={e => this.onChangeDate(e)}
            changeHour={e => this.onChangeHour(e)}
            reset={this.resetEndHandler}
            test={this.onSelectChange}
            remove={el => this.removePassenger(el)}
            add={e => this.addPassenger(e)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
