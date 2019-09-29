import React from "react";
import { NavLink } from "react-router-dom";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          MarioPlan
        </NavLink>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
