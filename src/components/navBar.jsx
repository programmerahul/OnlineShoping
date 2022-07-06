import React, { Component } from "react";
class NavBar extends Component {
  count = () => {
    let n = 0;
    for (let key in this.props.counters) {
      n += this.props.counters[key].value;
    }
    return n;
  };
  render() {
    return (
      <React.Fragment>
        <div className="cent inl">
          <div className="bottomLine">
            <p className="Para">Total Cost : {this.count()} /-</p>
            <button type="button" class="btn btn-info m-2">
              Buy
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
