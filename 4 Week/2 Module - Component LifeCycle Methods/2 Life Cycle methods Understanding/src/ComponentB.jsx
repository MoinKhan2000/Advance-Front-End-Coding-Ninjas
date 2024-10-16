import React from "react";

export default class ComponentB extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Component B"
    }
    console.log(`Component B Constructor Called`);
  }

  static getDerivedStateFromProps() {
    console.log(`Component B Get Derived State Form Called`);
    return null;
  }

  componentDidMound() {
    console.log(`Component B Component Did Mount Called`);
  }

  render() {
    console.log(`Component B Render Function Called`);
    return (
      <h1>Component B {this.state.name}</h1>
    )
  }
}