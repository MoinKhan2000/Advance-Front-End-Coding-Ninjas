import React from "react";
import '../App.css';

export default class TimerTwo extends React.Component {

  constructor() {
    super();
    console.log(`TimerTwo constructor`);
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
    console.log(`TimerTwo getDerivedStateFromProps`, props);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`ShouldComponentUpdate called`, nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log(`TimerTwo componentWillUnmount`);
    clearInterval(this.timer); // Clear the timer to avoid memory leaks
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Clearing the interval after 10 seconds. 
    // if (this.state.time == 10) {
    //   clearInterval(this.timer)
    // }
  }

  render() {
    console.log(`TimerTwo render`, this.props);
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
    console.log(`TimerTwo ComponentDidMount`);
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        date: new Date() // Update date every second
      });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`TimerTwo getSnapshotBeforeUpdate`);
    return null;
  }
}
