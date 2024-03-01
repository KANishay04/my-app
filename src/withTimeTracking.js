// withTimeTracking.js
import React, { Component } from 'react';

const withTimeTracking = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeSpent: 0,
      };
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          timeSpent: prevState.timeSpent + 1,
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      console.log('Time spent:', this.state.timeSpent); // Проверка работы HOC
      return <WrappedComponent {...this.props} timeSpent={this.state.timeSpent} />;
    }
  };
};

export default withTimeTracking;
