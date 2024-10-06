// App.js
import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to the React Movie App</h2>
        <p>This app showcases a list of movies.</p>

        {/* Movie Card Section */}
        <div className="movie-list">
          {/* You can render multiple MovieCard components here */}
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
