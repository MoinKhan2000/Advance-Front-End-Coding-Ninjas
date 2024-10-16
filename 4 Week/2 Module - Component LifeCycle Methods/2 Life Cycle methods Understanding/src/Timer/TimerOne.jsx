import React from "react";
import "../App.css";  // Import the CSS file

export default class TimerOne extends React.Component {

  constructor() {
    super();
    console.log(`TimerOne constructor`);
    this.state = {
      time: 0,
      bool: false,
      date: new Date() // Initialize date
    }
    this.timer = null;
  }

  handleClick = () => {
    console.log(this);
    this.setState((prevState) => ({ bool: !prevState.bool }));
  }

  static getDerivedStateFromProps(props) {
    console.log(`TimerOne getDerivedStateFromProps`, props);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`ShouldComponentUpdate called`, nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log(`TimerOne componentWillUnmount`);
    clearInterval(this.timer); // Clear the timer to avoid memory leaks
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`TimerOne componentDidUpdate`, prevProps, prevState, snapshot);
  }

  render() {
    console.log(`TimerOne render`, this.props);
    const timeString = new Date(this.state.time * 1000).toISOString().slice(11, 19);
    const dateString = this.state.date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
      <div className="clock-container">
        <div className="clock">
          <h1 className="clock-title">Digital Clock</h1>
          <p className="date">{dateString}</p>
          <p className="time">{timeString}</p>
          <p>Status: {this.state.bool ? "On" : "Off"}</p>
          <button className="toggle-btn" onClick={this.handleClick}>Change Status</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(`TimerOne ComponentDidMount`);
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        date: new Date() // Update date every second
      });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`TimerOne getSnapshotBeforeUpdate`);
    return null;
  }
}
