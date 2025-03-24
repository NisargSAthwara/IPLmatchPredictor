// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import regular CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Logo.svg" alt="Website Logo" className="websiteLogo" />
        <span className="websiteName">CricPredict</span>
      </div>
      <ul className="navLinks">
        <li>Home</li>
        <li>Winnings</li>
        <li>Fantasy Team</li>
        <li>Scores</li>
        <li>
          <input type="text" placeholder="Search" className="searchBar" />
        </li>
        <li>Login/Signup</li>
      </ul>
    </nav>
  );
}

export default Navbar;
