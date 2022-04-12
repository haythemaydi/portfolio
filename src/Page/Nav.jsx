import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="link" to="/">
          My Story
        </Link>
        <Link className="link" to="/about">
          About me
        </Link>
        <Link className="link" to="/contact">
          contact me
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
