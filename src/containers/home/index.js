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
    suggestCities: []
  };

  suggestHandler = event => {
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.value === "") {
      this.setState({ suggestCities: [] });
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
    //   axios
    //     .get("https://api.comparatrip.eu/cities/autocomplete/?q=" + text)
    //     .then(res => {
    //       let citiesName = [];
    //       Object.values(res.data).forEach(element => {
    //         citiesName.push(element.unique_name);
    //         this.setState({ suggestCities: citiesName });
    //       });
    //     });
    // }
  };

  departChoosenCity = city => {
    this.setState({ departCity: city });
  };

  render() {
    return (
      <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <LeftForm
          data={this.state}
          change={event => this.suggestHandler(event)}
          click={this.oui}
        />
        <RightForm
          choosenCity={this.departChoosenCity}
          citiesSuggestion={this.state.suggestCities}
        />
      </div>
    );
  }
}

export default Home;
