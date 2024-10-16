import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.intervalId = null; // To store the interval ID
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      if (prevState.curIndex <= prevState.fullName.length) {
        return {
          curIndex: prevState.curIndex + 1,
          currentName: prevState.fullName.substring(0, prevState.curIndex)
        };
      } else {
        clearInterval(this.intervalId); // Clear interval when full name is displayed
        return prevState;
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.showName !== prevProps.showName) {
      if (this.props.showName) {
        this.setState({ curIndex: 0, currentName: "" }); // Reset on start
        this.intervalId = setInterval(this.typeWriterEffect, 500);
      } else {
        clearInterval(this.intervalId); // Clear interval on stop
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear interval when component is unmounted
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
