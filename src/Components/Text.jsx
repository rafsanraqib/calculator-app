import React, { Component } from "react";

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
