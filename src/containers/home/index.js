import React, { Component } from "react";
import "./home.scss";
import background from "../../assets/images/green-palm-trees-near-sea-under-blue-sky-3601456.jpg";
import LeftForm from "../left-form";
import axios from "axios";
import RightForm from "../right-form";

class Home extends Component {
  state = {
    departCity: "",
    arrivalCity: "",
    fieldFocus: "",
    suggestCities: []
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
      if (this.state.fieldFocus === "arrivalCity") {
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

  departChoosenCity = city => {
    this.setState({ departCity: city });
  };

  arrivalChoosenCity = city => {
    this.setState({ arrivalCity: city });
  };

  focusFieldHandler = event => {
    event.preventDefault();

    this.setState({ fieldFocus: event.target.name });

    if (event.target.name === "arrivalCity") {
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

  render() {
    // console.log(this.state);

    return (
      <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <LeftForm
          data={this.state}
          change={event => this.suggestHandler(event)}
          focusField={event => this.focusFieldHandler(event)}
          changeValue={this.changeDepartArrivalHandler}
        />
        <RightForm
          choosenDepartCity={this.departChoosenCity}
          choosenArrivalCity={this.arrivalChoosenCity}
          data={this.state}
        />
      </div>
    );
  }
}

export default Home;
