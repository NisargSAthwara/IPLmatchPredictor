// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Logo.svg" alt="Website Logo" className="websiteLogo" />
        <span className="websiteName">CricPredict</span>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        {/* Link to Home */}
        <li>
          <Link to="/winnings">Winnings</Link>
        </li>{" "}
        {/* Link to Winnings */}
        <li>
          <Link to="/fantasy-team">Fantasy Team</Link>
        </li>{" "}
        {/* Link to Fantasy Team */}
        <li>
          <Link to="/scores">Scores</Link>
        </li>{" "}
        {/* Link to Scores */}
        <li>
          <input type="text" placeholder="Search" className="searchBar" />
        </li>
        <li>Login/Signup</li>
      </ul>
    </nav>
  );
}

export default Navbar;
