import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        Animeme Finder
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <ul className="menu">
          <li className="menu-item">
            <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/login" activeClassName="active" onClick={toggleMenu}>
              Login
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/register" activeClassName="active" onClick={toggleMenu}>
              Register
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/profile" activeClassName="active" onClick={toggleMenu}>
              Profile
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/recommendations"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Recommendations
            </NavLink>
          </li>
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
