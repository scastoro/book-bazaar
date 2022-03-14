import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="home-container">
        <h1 className="main-title">
          The #1 Destination for all your Reading Needs
        </h1>
        <Link className="main-btn" to="/shop">
          Shop Now
        </Link>
      </section>
      <section className="more-info">
        <img
          className="books"
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="several books"
        />
        <section className="more-info-text">
          <h2 className="more-info-heading">
            Whatever type of book you like, we have
          </h2>
          <p className="more-info-para">
            Browse our selection in the interactive online shop
          </p>
        </section>
      </section>
    </main>
  );
};

export default Home;
