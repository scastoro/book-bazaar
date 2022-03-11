import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <img className="logo" src="#" alt="" />
        <nav className="nav">
          <Link className="text-link" to="/">
            Home
          </Link>
          <Link className="text-link" to="/shop">
            Shop
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
