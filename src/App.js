import React, { Component } from "react";
import Text from "./Components/Text";
import Button from "./Components/Buttons";

class App extends Component {
  state = {
    textVal: "",
    leftValue: "",
    rightValue: ""
  };

  handleClick = val => {
    if (val === "Clear") {
      let textVal = this.state.textVal;
      textVal = "";
      this.setState({ textVal });
    } else if (val === "+") {
      let textVal = this.state.textVal;
      textVal += "+";
      this.setState({ textVal });
    } else if (val === "=") {
      const res = this.state.textVal.split(/[+-,]/);
      let result = parseInt(res[0], 10) + parseInt(res[1], 10);
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
