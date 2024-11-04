import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// Icons
import HomeIcon from "../../assets/home.png";
import OrdersIcon from "../../assets/basket.png";
import SignIn from "../../assets/Log in.png";
import Logout from "../../assets/Log Out.png";
import Cart from "../../assets/cart.png";

import { AuthContext } from "../../context/Auth/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onLogoutHandler = () => {
    scrollTop();
    logout(); // Calls the logout function from AuthContext
  };

  return (
    <nav
      className="navbar"
      style={{
        justifyContent: "space-evenly",
        boxShadow: "rgb(17 17 26 / 5%) 0px 15px 20px",
      }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={scrollTop}>
          Busy Buy
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"} onClick={scrollTop}>
          <li className="nav-item active">
            <NavLink
              activeclassname="active-links"
              to="/"
              className="nav-links"
              exact="true"
            >
              <span>
                <img
                  className="icon_styles"
                  src={HomeIcon}
                  alt="Home"
                  onClick={scrollTop}
                />
              </span>{" "}
              Home
            </NavLink>
          </li>

          {isAuthenticated && (
            <>
              <li className="nav-item active">
                <NavLink
                  activeclassname="active-links"
                  to="/myorders"
                  className="nav-links"
                >
                  <span>
                    <img
                      className="icon_styles"
                      src={OrdersIcon}
                      alt="Orders"
                      onClick={scrollTop}
                    />
                  </span>{" "}
                  My orders
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink
                  activeclassname="active-links"
                  to="/cart"
                  className="nav-links"
                >
                  <span>
                    <img
                      className="icon_styles"
                      src={Cart}
                      alt="Cart"
                      onClick={scrollTop}
                    />
                  </span>{" "}
                  Cart
                </NavLink>
              </li>
            </>
          )}

          <li className="nav-item active">
            {isAuthenticated ? (
              <NavLink
                to="/"
                onClick={onLogoutHandler}
                activeclassname="active-links"
                className="nav-links"
              >
                <span>
                  <img className="icon_styles" src={Logout} alt="Logout" />
                </span>
                Logout
              </NavLink>
            ) : (
              <NavLink
                activeclassname="active-links"
                to="/signin"
                className="nav-links"
              >
                <span>
                  <img
                    className="icon_styles"
                    src={SignIn}
                    alt="Sign In"
                    onClick={scrollTop}
                  />
                </span>
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
