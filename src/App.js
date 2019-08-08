import React, { Component } from "react";
import Text from "./Components/Text";
import Button from "./Components/Buttons";

// This class loads all the components and handles all the calculations
class App extends Component {
  state = {
    textVal: "",
    leftValue: "",
    rightValue: "",
    sign: ""
  };

  handleClick = val => {
    if (val === "Clear") {
      let textVal = this.state.textVal;
      textVal = "";
      this.setState({ textVal });
    } else if (val === "+") {
      let textVal = this.state.textVal;
      textVal += "+";
      let sign = this.state.sign;
      sign = val;
      this.setState({ sign });
      this.setState({ textVal });
    } else if (val === "-") {
      let textVal = this.state.textVal;
      textVal += "-";
      let sign = this.state.sign;
      sign = val;
      this.setState({ sign });
      this.setState({ textVal });
    } else if (val === "*") {
      let textVal = this.state.textVal;
      textVal += "*";
      let sign = this.state.sign;
      sign = val;
      this.setState({ sign });
      this.setState({ textVal });
    } else if (val === "/") {
      let textVal = this.state.textVal;
      textVal += "/";
      let sign = this.state.sign;
      sign = val;
      this.setState({ sign });
      this.setState({ textVal });
    } else if (val === "Delete") {
      let len = this.state.textVal.length - 1;
      let textVal = this.state.textVal;
      textVal = this.state.textVal.substring(len, 0);
      this.setState({ textVal });
    } else if (val === "=") {
      const res = this.state.textVal.split(/[*+/-]/);
      let result = 0;
      if (this.state.sign === "+") {
        result = parseInt(res[0], 10) + parseInt(res[1], 10);
      } else if (this.state.sign === "-") {
        result = parseInt(res[0], 10) - parseInt(res[1], 10);
      } else if (this.state.sign === "/") {
        result = parseInt(res[0], 10) / parseInt(res[1], 10);
      } else {
        result = parseInt(res[0], 10) * parseInt(res[1], 10);
      }
      result = result.toString();
      this.setState({ textVal: result });
    } else {
      let textVal = this.state.textVal;
      textVal += val;
      this.setState({ textVal });
    }
  };

  render() {
    return (
      <div className="mframe">
        <div className="maincalc">
          <Text text={this.state.textVal} />
          <div className="button-row">
            <Button label={"Clear"} onClick={this.handleClick} />
            <Button label={"Delete"} onClick={this.handleClick} />
            <Button label={"."} onClick={this.handleClick} />
            <Button label={"/"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"7"} onClick={this.handleClick} />
            <Button label={"8"} onClick={this.handleClick} />
            <Button label={"9"} onClick={this.handleClick} />
            <Button label={"*"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"4"} onClick={this.handleClick} />
            <Button label={"5"} onClick={this.handleClick} />
            <Button label={"6"} onClick={this.handleClick} />
            <Button label={"-"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"1"} onClick={this.handleClick} />
            <Button label={"2"} onClick={this.handleClick} />
            <Button label={"3"} onClick={this.handleClick} />
            <Button label={"+"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"0"} onClick={this.handleClick} />
            <Button label={"="} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
