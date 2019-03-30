import React from "react";

const selection = props => {
  return (
    <div className={props.selectionClass}>
      <div className="container">
        <h1>{props.header}</h1>
        {props.dialog}
        <button
          id={props.id}
          type="button"
          className="btn btn-outline-danger"
          onClick={props.clicked}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default selection;
