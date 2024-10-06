import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
