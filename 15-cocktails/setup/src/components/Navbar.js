import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "blue" : "grey",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "blue" : "grey",
          };
        }}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
