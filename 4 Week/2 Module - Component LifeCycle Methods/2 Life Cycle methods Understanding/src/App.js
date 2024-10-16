import React from "react";
// import ComponentA from "./ComponentA";
import TimerOne from "./Timer/TimerOne";
import TimerTwo from "./Timer/TimerTwo";
import TimerStartStop from "./Timer/TimerStartStop";
import RefreshingAppInFiveSec from "./Timer/Refreshing_App_In_5_Sec";
import ComponentA from "./ComponentA";
import ErrorBoundary from "./Timer/ErrorBoundary";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mount: false
    }
  }

  handleMount = () => {
    this.setState({ mount: !this.state.mount });
  }
  render() {
    return (
      <div>
        {/* <ComponentA /> */}
        {/* <TimerOne /> */}
        {/* <button className="toggle-btn" onClick={this.handleMount}>{this.state.mount ? "Un-Mount" : "Mount"}</button> */}
        {/* {this.state.mount ? <TimerTwo /> : ''} */}
        {/* <TimerStartStop /> */}
        {/* <RefreshingAppInFiveSec /> */}
        <ErrorBoundary >
          <ComponentA />
        </ErrorBoundary>
      </div>
    );
  }
}