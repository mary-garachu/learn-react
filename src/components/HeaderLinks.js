import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div className="navlink">
      <h2>#FitWithTimo</h2>
      <nav className="navlink-items">
        <NavLink
          to="/"
        >
          Home
        </NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/socials">Social media</NavLink>

        <NavLink to="/form">Form</NavLink>
      </nav>
    </div>
  );
};

export default HeaderLinks;
