// App.js
import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieList from "./MovieList/MovieList";
import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import PropsInCBC from "./Prpps/PropsInCBC";
import PropsInFBC from "./Prpps/PropsInFBC";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Main Content */}
      <PropsInCBC
        name={"Moin Khan"}
        age={23}
        course={"Mern Stack"}
        address={{ firstLane: "FirstLane is Azad Ward", secondLane: "SecondLane is Rehmaniya Chowk" }}
      />

      <PropsInFBC />

      <div className="main-content">
        <h2>Welcome to the React Movie App</h2>
        <p>This app showcases a list of movies.</p>
        <div className="">
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
