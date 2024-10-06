import { Component } from "react";

//? Props are immutable. They cannot be modified.

export default class Props extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, course } = this.props;
    const containerStyle = {
      backgroundColor: "#f0f8ff",
      padding: "20px",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
      fontSize: "18px",
      color: "#333",
      margin: "10px",
    };

    const nameStyle = {
      fontWeight: "bold",
      color: "#2c7a7b",
    };

    return (
      <div style={containerStyle}>
        Props In Class Based Component JSX -&nbsp;
        <span style={nameStyle}>{name}</span> is {age} years old and enrolled in {course}.
      </div>
    );
  }
}

// Adding default props
Props.defaultProps = {
  name: "John Doe",
  age: 20,
  course: "Computer Science",
};
