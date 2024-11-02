import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>About</NavLink>
        <NavLink to="/items" style={({ isActive }) => isActive ? { color: "red" } : { color: "gray" }}>Items</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
