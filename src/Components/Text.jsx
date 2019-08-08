import React, { Component } from "react";

// This class has the design for the screen of the calculator
class Button extends Component {
  render() {
    return (
      <div className="screen-row">
        <input type="text" value={this.props.text} readOnly />
      </div>
    );
  }
}

export default Button;
