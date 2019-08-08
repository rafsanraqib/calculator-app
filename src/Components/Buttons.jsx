import React from "react";

// This function returns the button component of the calculator
const Button = props => {
  return (
    <input
      type="button"
      className="btn btn-primary"
      value={props.label}
      onClick={() => props.onClick(props.label)}
    />
  );
};

export default Button;
