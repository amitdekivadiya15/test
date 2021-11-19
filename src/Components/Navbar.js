import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        About Us
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact Us
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/user/amit">
        Users
      </NavLink>
      <NavLink activeClassName="active_class" to="/search">
        Search
      </NavLink>
    </>
  );
};

export default Navbar;
