import { Component } from "react";

export class Todo extends Component {

  render() {
    return (
      <div className="todo">
        <p>{this.props.todo}</p>
        <button onClick={() => this.props.onRemove(this.props.todo)}>x</button>
      </div>
    );
  }
}
