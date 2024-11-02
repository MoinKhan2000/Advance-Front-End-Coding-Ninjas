import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/items">Items</Link>
      </div>
    </>
  );
}

export default Navbar;
