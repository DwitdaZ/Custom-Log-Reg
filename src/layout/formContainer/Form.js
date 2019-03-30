import React from "react";

import FormInput from "./Input";

const form = props => {
  return (
    <form onSubmit={props.submitted}>
      <div>
        <h1 className="text-center">{props.form}</h1>
      </div>
      <hr />
      <FormInput
        label="Email"
        type="email"
        name="email"
        placholder="Enter email"
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        placholder="Enter password"
      />
      <div className="form-group">
        <button type="submit" className="btn btn-danger form-control">
          {props.form}
        </button>
      </div>

      <div className="forgotPassword">Forgot Password?</div>
    </form>
  );
};

export default form;
