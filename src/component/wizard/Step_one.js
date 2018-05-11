import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stepOne } from "../../ducks/reducer";

class Step_one extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this)
  }
  /* Handle Change Methods */

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }

  handleChangeState(event) {
    this.setState({ state: event.target.value });
  }

  handleChangeZip(event) {
    this.setState({ zipcode: event.target.value });
  }

  render() {
    return (
      <div>
        Name:
        <input
          type="text"
          placeholder="name.."
          onChange={this.handleChangeName}
        />
        Address:
        <input
          type="text"
          placeholder="address.."
          onChange={this.handleChangeAddress}
        />
        City:
        <input
          type="text"
          placeholder="city.."
          onChange={this.handleChangeCity}
        />
        State:
        <input
          type="text"
          placeholder="state.."
          onChange={this.handleChangeState}
        />
        Zipcode:
        <input
          type="text"
          placeholder="zipcode.."
          onChange={this.handleChangeZip}
        />
        <Link to="/wizard/step2">
          <button onClick={(e) => this.props.stepOne(e.target.value)}>Next Step</button>
        </Link>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  };
}

export default connect(mapStateToProps, { stepOne })(Step_one);
