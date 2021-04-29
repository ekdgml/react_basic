import React from 'react';

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        Current Count : {this.state.count}
        <br></br>
        <button onClick={this.increateCount} onMouseOut={this.resetCount}>
          Count Up
        </button>
        <br></br>
        If Mouse cursor out of screen, count is reset.
      </div>
    );
  }
}

export default Counter3;
