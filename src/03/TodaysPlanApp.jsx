import React, { Component } from 'react';

class TodaysPlanApp extends Component {
  render() {
    const { onButtonClic, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlanApp /> : null}
        <button onclick={onButtonClick}>°èÈ¹¾øÀ½</button>
      </div>
    );
  }
}

export default TodaysPlanApp;
