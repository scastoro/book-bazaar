import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const [style, setStyle] = useState({});

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setStyle({
        background: "rgba(3,3,3,0)",
      });
    } else if (location.pathname === "/shop") {
      setStyle({
        background: "rgba(3,3,3,1)",
      });
    }
  }, [location]);
  return (
    <>
      <header style={style}>
        <section className="navbar-container">
          <h2 className="title">Boundless Book Bazaar</h2>
          <nav className="nav">
            <Link className="text-link" to="/">
              Home
            </Link>
            <Link className="text-link" to="/shop">
              Shop
            </Link>
          </nav>
        </section>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
