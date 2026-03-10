import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import RegisterPopup from "./RegisterPopup";
import logo from "../photos/logo.png";
import Sviet from "../photos/SVIET-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    setShowPopup(true);
    closeMenu();
  };

  return (
    <>
      <nav className="navbar">
        
        <div className="navbar-logo">
          <img src={Sviet} className="navbar-logo-image" alt="SVIET Logo" />
          <img src={logo} className="navbar-logo-image" alt="Conference Logo" />
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/#home" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/#overview" onClick={closeMenu}>Overview</NavLink>
          <NavLink to="/#agenda" onClick={closeMenu}>Agenda</NavLink>
          <NavLink to="/#speakers" onClick={closeMenu}>Speakers</NavLink>

          {/* Registration Button */}
          <button type="button" onClick={openPopup} className="nav-register-btn">
            Registration
          </button>

          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <Link to="/login" onClick={closeMenu}>
            <button className="register-button">LOGIN</button>
          </Link>
        </div>

        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Hamburger */}
        <div
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Popup outside navbar */}
          {showPopup && (
            <RegisterPopup closePopup={() => setShowPopup(false)} />
          )}
    </>
  );
};

export default Navbar;