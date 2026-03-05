import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../photos/logo.png";
import Sviet from "../photos/SVIET-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={Sviet} className="navbar-logo-image" alt="SVIET Logo" />
        <img src={logo} className="navbar-logo-image" alt="Conference Logo" />
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/speakers" onClick={closeMenu}>Speakers</Link>
        <Link to="/speakers-call" onClick={closeMenu}>Speakers Call</Link>
        <Link to="/committee" onClick={closeMenu}>Committee</Link>

        <Link to="/register" onClick={closeMenu}>
          <button className="register-button">Register Now →</button>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    </nav>
  );
};

export default Navbar;