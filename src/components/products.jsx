import React, { Component } from "react";
import App from "../App";
class Products extends Component {
  state = {
    rate: [20, 40, 65, 50, 30],
    counters: [
      { id: 1, value: 0, type: "Apple", rate: 20 },
      { id: 2, value: 0, type: "Mango", rate: 40 },
      { id: 3, value: 0, type: "Banana", rate: 65 },
      { id: 4, value: 0, type: "Lichi", rate: 50 },
      { id: 5, value: 0, type: "Guava", rate: 30 },
    ],
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };
  handleIncrement = (c) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value = counter.value + this.state.rate[c.id - 1];
      }
      return counter;
    });
    this.setState({ counters });
  };
  handleProductSelection = (id) => {
    this.state.counters[id].value += this.state.rate[id];
    this.setState(this);
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (c) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        if (counter.value === 0) {
          return counter;
        }
        counter.value = counter.value - this.state.rate[c.id - 1];
      }
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              onClick={() => this.handleProductSelection(0)}
              style={{ cursor: "pointer" }}
              className="col-sm bdr m-2"
            >
              <img
                className="sizeit"
                src={require("./photos/apple.jpg")}
                alt=""
              />
              <button type="button" className="btn btn-info">
                {this.state.rate[0]}
              </button>
            </div>
            <div
              onClick={() => this.handleProductSelection(1)}
              style={{ cursor: "pointer" }}
              className="col-sm bdr m-2"
            >
              <img
                className="sizeit"
                src={require("./photos/mango.png")}
                alt=""
              />
              <button type="button" className="btn btn-info">
                {this.state.rate[1]}
              </button>
            </div>
            <div
              onClick={() => this.handleProductSelection(2)}
              style={{ cursor: "pointer" }}
              className="col-sm bdr m-2"
            >
              <img
                className="sizeit"
                src={require("./photos/banana.png")}
                alt=""
              />
              <button type="button" className="btn btn-info">
                {this.state.rate[2]}
              </button>
            </div>
            <div
              onClick={() => this.handleProductSelection(3)}
              style={{ cursor: "pointer" }}
              className="col-sm bdr m-2"
            >
              <img
                className="sizeit"
                src={require("./photos/lichi.png")}
                alt=""
              />
              <button type="button" className="btn btn-info">
                {this.state.rate[3]}
              </button>
            </div>
            <div
              onClick={() => this.handleProductSelection(4)}
              style={{ cursor: "pointer" }}
              className="col-sm bdr m-2"
            >
              <img
                className="sizeit"
                src={require("./photos/guava.png")}
                alt=""
              />
              <button type="button" className="btn btn-info">
                {this.state.rate[4]}
              </button>
            </div>
          </div>
        </div>
        <App
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Products;
