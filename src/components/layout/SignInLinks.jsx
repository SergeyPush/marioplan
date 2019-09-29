import React from "react";
import { NavLink } from "react-router-dom";
import "./SignInLinks.css";

const SignInLinks = () => {
  return (
    <ul className="right menu-links">
      <li className="">
        <NavLink to="/create" className="list-item">
          New Project
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="list-item">
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="list-item btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLinks;
