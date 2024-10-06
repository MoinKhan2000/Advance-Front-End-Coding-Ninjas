// App.js
import React, { Component } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="app-container">
          <Hero />
          <Skills />
          <About />
        </div>
      </>
    );
  }
}

export default App;
