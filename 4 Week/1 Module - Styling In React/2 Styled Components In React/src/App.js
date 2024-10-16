// App.js
import "./App.css";
import React from "react";
import Footer from "./Footer/Footer";
import PropsInCBC from "./Prpps/PropsInCBC";
import PropsInFBC from "./Prpps/PropsInFBC";
import MovieList from "./MovieList/MovieList";
import MovieCard from "./MovieCard/MovieCard";
import StyledCompNavbar from "./Navbar/StyledCompNavbar";
import InlineStyledNavbar from "./Navbar/InlineStyledNavbar";
import ModuleCSSNavbar from "./Navbar/ModuleCSSNavbar";

function App() {
  return (
    <div className="app">
      {/* <InlineStyledNavbar /> */}
      <StyledCompNavbar />
      <ModuleCSSNavbar />
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
