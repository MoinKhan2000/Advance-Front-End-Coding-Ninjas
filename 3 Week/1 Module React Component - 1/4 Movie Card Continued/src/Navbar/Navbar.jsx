import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">Movie App</h1>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
