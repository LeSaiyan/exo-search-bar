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
    if (event.target.value === "") {
      this.setState({ suggestCities: [] });
    } else if (event.target.value !== "") {
      axios
        .get(
          "https://api.comparatrip.eu/cities/autocomplete/?q=" +
            event.target.value
        )
        .then(res => {
          let test = [];
          Object.values(res.data).forEach(element => {
            test.push(element.local_name);
            this.setState({ suggestCities: test });
          });
        });
    }
  };

  departChoosenCity = city => {
    this.setState({ departCity: city });
  };

  render() {
    console.log(this.state);

    return (
      <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <LeftForm
          data={this.state}
          change={this.suggestHandler}
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
