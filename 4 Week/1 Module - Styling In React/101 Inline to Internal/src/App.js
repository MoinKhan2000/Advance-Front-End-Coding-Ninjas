import "./styles.css";
import React from 'react';

export default function App() {
  // Create a styles object to store all the styles
  const styles = {
    form: {
      width: "60%",
      margin: "50px auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    heading: {
      fontSize: "2rem",
      letterSpacing: 2
    },
    input: {
      padding: 10
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: 20
    },
    button: {
      outline: "none",
      paddingBlock: 5,
      width: 100,
      backgroundColor: "red",
      color: "white",
      cursor: "pointer"
    }
  };

  return (
    <div className="App">
      {/* Use the internal styles from the styles object */}
      <form style={styles.form}>
        <h3 style={styles.heading}>Sign Up</h3>
        <input style={styles.input} placeholder="Username" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" />
        <div style={styles.buttonContainer}>
          {/* Apply button styles */}
          <button style={styles.button}>Cancel</button>
          <button style={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
