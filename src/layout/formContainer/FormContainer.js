import React from "react";

import Form from "./Form";

const formContainer = props => {
  const animate = props.userToggle
    ? { left: "20.5%", "box-shadow": "-10px 10px 15px 8px rgba(0, 0, 0, 0.2)" }
    : { left: "50.5%", "box-shadow": "10px 10px 15px 8px rgba(0, 0, 0, 0.2)" };
  return (
    <div className="containForm" style={animate}>
      {props.userToggle ? (
        <div id="signUp" className="container">
          <Form form="Sign Up" submitted={props.signUpSubmit} />
        </div>
      ) : (
        <div id="signIn" className="container">
          <Form form="Sign In" submitted={props.signInSubmit} />
        </div>
      )}
    </div>
  );
};

export default formContainer;
