// App.js
import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieList from "./MovieList/MovieList";
import "./App.css";
import Footer from "./Footer/Footer";
import PropsInCBC from "./Prpps/PropsInCBC";
import PropsInFBC from "./Prpps/PropsInFBC";
import InlineStyledNavbar from "./Navbar/InlineStyledNavbar";

function App() {
  return (
    <div className="app">
      <InlineStyledNavbar />
      {
        /* 
          <PropsInCBC
            name={"Moin Khan"}
            age={23}
            course={"Mern Stack"}
            address={{ firstLane: "FirstLane is Azad Ward", secondLane: "SecondLane is Rehmaniya Chowk" }}
          /> 
          
          <PropsInFBC /> 
        */
      }

      <div className="main-content">
        <h2>Welcome to the React Movie App</h2>
        <p>This app showcases a list of movies.</p>
        <div className="">
          <MovieList />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
