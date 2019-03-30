import React, { Component, Fragment } from "react";

import "./App.css";
import SelectionContainer from "./selectionContainer/SelectionContainer";
import FormContainer from "./formContainer/FormContainer";

export default class App extends Component {
  state = {
    userToggle: false
  };

  signUpClickHandler = evt => {
    this.setState({ userToggle: true });
  };

  signInClickHandler = evt => {
    this.setState({ userToggle: false });
  };

  signInSubmitHandler = evt => {
    evt.preventDefault();
    alert("Successful login");
  };

  signUpSubmitHandler = evt => {
    evt.preventDefault();
    alert("Successful registration");
  };

  render() {
    return (
      <Fragment>
        <FormContainer
          {...this.state}
          signInSubmit={this.signInSubmitHandler}
          signUpSubmit={this.signUpSubmitHandler}
        />
        <SelectionContainer
          signUpClicked={this.signUpClickHandler}
          signInClicked={this.signInClickHandler}
        />
      </Fragment>
    );
  }
}
