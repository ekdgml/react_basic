import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        <span>Count : {this.state.count}</span>
        <br></br>
        <button onClick={this.increaseCount}>Count Up</button>
      </div>
    );
  }
}

export default Counter;
