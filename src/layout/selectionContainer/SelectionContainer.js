import React, { Fragment } from "react";

import Selection from "./Selection";

const selectContainer = props => {
  const left = (
    <p>
      Don't have an account yet?
      <br />
      Sign Up for an account
    </p>
  );
  const right = (
    <p>
      Already have an account?
      <br />
      Sign In to your account
    </p>
  );
  return (
    <Fragment>
      <div className="d-flex py-5">
        <div className="containSelection col-md-8">
          <Selection
            selectionClass="left"
            header="Sign Up"
            dialog={left}
            buttonText="Sign Up"
            id="signUp"
            clicked={props.signUpClicked}
          />
          <Selection
            selectionClass="right"
            header="Sign In"
            dialog={right}
            buttonText="Sign In"
            id="signIn"
            clicked={props.signInClicked}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default selectContainer;
