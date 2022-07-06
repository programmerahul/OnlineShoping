import React, { Component } from "react";
import Hearta from "./heart";

class Counter extends Component {
  render() {
    return (
      <div className="row topMargin">
        <div className="col-sm">
          <span className="badge badge-dark fixed">
            {this.props.counter.type}
          </span>
          <span className={this.findClassName() + " fixed"}>
            {this.format() / this.props.counter.rate}
          </span>
          <span className={this.findClassName() + " fixed"}>
            {this.format()}
          </span>
        </div>
        <div className="col-sm">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success btn-sm btn-wid"
          >
            Add
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2 btn-wid"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            Remove
          </button>
          <Hearta />
        </div>
      </div>
    );
  }
  findClassName() {
    let str = "badge m-2 badge-";
    str += this.props.counter.value === 0 ? "warning" : "primary";
    return str;
  }
  format() {
    return this.props.counter.value === 0 ? 0 : this.props.counter.value;
  }
}

export default Counter;
