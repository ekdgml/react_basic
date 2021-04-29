import React, { Component } from 'react';

function TodaysPlanApp(props) {
  const { onButtonClick, hasPaln } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlanApp /> : null}
      <button onclick={onButtonClick}>°èÈ¹¾øÀ½</button>
    </div>
  );
}

export default SFCTodaysPlanApp;
