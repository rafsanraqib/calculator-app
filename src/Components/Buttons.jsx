import React from "react";

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
