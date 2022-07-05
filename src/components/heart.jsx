import React, { Component } from "react";
class Hearta extends Component {
  state = {
    color: "-o",
  };
  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.flip}
        className={"fa m-2 fa-heart" + this.state.color}
        aria-hidden="true"
      ></i>
    );
  }
  flip = () => {
    if (this.state.color) {
      this.setState({ color: "" });
    } else {
      this.setState({ color: "-o" });
    }
  };
}

export default Hearta;
