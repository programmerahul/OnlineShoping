import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div>
            <div>
              <p>Items in your cart:</p>
            </div>
            <Counters
              counters={this.props.counters}
              onDelete={this.props.onDelete}
              onReset={this.props.onReset}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
