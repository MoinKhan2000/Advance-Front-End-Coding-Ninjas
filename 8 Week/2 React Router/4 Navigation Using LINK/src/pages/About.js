import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/items">Items</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <h1>About Page</h1>
      </main>
    </>
  );
}

export default About;
