import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Link className="sidenavLink" to="/table">
        Table
      </Link>
      <Link className="sidenavLink" to="/grid">
        Grid
      </Link>
    </div>
  );
};

export default SideNav;
