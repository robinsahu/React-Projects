import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Login
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink> */}
    </nav>
  );
};
export default StyledNavbar;
