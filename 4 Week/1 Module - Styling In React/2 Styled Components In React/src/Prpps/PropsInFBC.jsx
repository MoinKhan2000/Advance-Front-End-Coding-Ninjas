import React from 'react';

//? Props are immutable. They cannot be modified.

// We can directly set default props as a function default parmeters.
const PropsInFBC = ({ name = "Student", age = 23, course = "MERN" }) => {
  const containerStyle = {
    backgroundColor: "#f9fafb",
    padding: "15px",
    borderRadius: "8px",
    fontFamily: "Verdana, sans-serif",
    fontSize: "16px",
    color: "#2d3748",
    margin: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  };

  const highlightStyle = {
    fontWeight: "bold",
    color: "#3182ce",
  };

  return (
    <div style={containerStyle}>
      <p>
        <b>
          Props In Functional Based Component <br />
        </b>        <span style={highlightStyle}>{name}</span> is {age} years old and enrolled in {course}.
      </p>
    </div>
  );
}

export default PropsInFBC;
