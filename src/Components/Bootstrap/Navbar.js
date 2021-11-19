import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
        Services
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact
      </NavLink>
    </>
  );
};

export default Navbar;
