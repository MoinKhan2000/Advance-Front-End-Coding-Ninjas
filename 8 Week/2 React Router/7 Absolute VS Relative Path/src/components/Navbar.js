import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>

      {/* Absolute Path */}
      {/* <div className="nav">
        <NavLink to="/root" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Home</NavLink>
        <NavLink to="/root/about" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>About</NavLink>
        <NavLink to="/root/items" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Items</NavLink>
      </div> */}

      {/* Relative Paths */}
      <div className="nav">
        <NavLink to="" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Home</NavLink>
        <NavLink to="about" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>About</NavLink>
        <NavLink to="items" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Items</NavLink>
      </div>

      {/* Using the Outlet component */}
      <Outlet />
    </>
  );
}

export default Navbar;
