import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    /*
    this.loading = true;
    this.formData = 'no data';
    */
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //state 변경

    this.setState({
      loading: false,
      formData: this.state.formData + '>> ' + data,
    });
    /*
    this.loading = false;
    this.formData = this.formData + '>> ' + data;
    this.forceUpdate();
    */
  }
  render() {
    return (
      <div>
        <span>Loading : {String(this.state.loading)}</span>
        <br></br>
        <span>FormData : {this.state.formData}</span>
        {/*
        <span>Loading.. : {String(this.loading)}</span>
        <br></br>
        <span>FormData : {this.formData}</span>
        */}
      </div>
    );
  }
}

export default ForceUpdateExample;
