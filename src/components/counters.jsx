import React, { Component } from "react";
import NavBar from "./navBar";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters, onDecrement } =
      this.props;
    return (
      <div>
        <div className="cart">
          <div className="Pricing">
            <p className="parag1">Quantity</p>
            <p className="parag">Cost</p>
          </div>
          <div>
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </div>
        </div>
        <button onClick={onReset} className="btn btn-primary m-2 inl">
          Reset
        </button>
        <NavBar counters={this.props.counters} />
      </div>
    );
  }
}

export default Counters;
