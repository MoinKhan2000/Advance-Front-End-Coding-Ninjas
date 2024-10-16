import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, ind) => {
          return <Todo key={ind} todo={todo.text} onRemove={this.props.onRemove} />
        })}
      </div>
    );
  }
}
