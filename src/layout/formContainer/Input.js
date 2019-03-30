import React from "react";

const formInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default formInput;
