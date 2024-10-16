import React from "react";
import '../App.css';

export default class TimerStartStop extends React.Component {

  constructor() {
    super();
    console.log(`TimerStartStop constructor`);
    this.state = {
      time: 0,
      date: new Date(),
      start: false
    }
    this.timer = null;
  }

  componentWillUnmount() {
    console.log(`TimerStartStop componentWillUnmount`);
    clearInterval(this.timer); // Clear the timer to avoid memory leaks
  }



  handleStartStop = () => {
    if (this.state.start) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
          date: new Date()
        })
      }, 1000);
    }
    this.setState((prevState) => ({ start: !prevState.start }))
  }

  componentDidMount() {
    if (this.start) {
      this.timer = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
          date: new Date()
        });
      }, 1000);
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //? PrevProps are the objects of props those are passed through the parent.
    //? If we have set any state in this component then prevState will hold it 
    //! if we return anything from here then will passed from here to componentDidUpdate method.  
    console.log(`TimerStartStop getSnapshotBeforeUpdate`);
    return prevState
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TimerStartStop getSnapshotBeforeUpdate");
    console.log("________________________________________");
    //! whatever the return value of getSnapshotBeforeUpdate we will access it here in snapshot.
    console.log("Previous Props", prevProps);
    console.log("Previous State", prevState);
    console.log("Snapshot from getSnapshotBeforeUpdate", snapshot);
  }

  render() {
    console.log(`TimerStartStop render`, this.props);
    const timeString = new Date(this.state.time * 1000).toISOString().slice(11, 19);
    const dateString = this.state.date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
      <div className="clock-container">
        <div className="clock">
          <h1 className="clock-title">Clock Timer</h1>
          <p className="date">{dateString}</p>
          <p className="time">{timeString}</p>
          <button className="toggle-btn" onClick={this.handleStartStop}>{this.state.start ? "Start" : "Stop"}</button>
        </div>
      </div>
    );
  }

}
