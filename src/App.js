import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };
  handleIncrement = (c) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value = counter.value + 1;
      }
      return counter;
    });
    this.setState({ counters });
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
        counter.value = counter.value - 1;
      }
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
