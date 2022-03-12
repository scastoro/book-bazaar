import React, { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(
    () =>
      setBooks([
        {
          title: "test book 1",
          img: "",
          count: 1,
          price: "25",
          id: "1",
        },
      ]),
    []
  );

  function countOnChange(newCount, id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            count: newCount,
          };
        } else {
          return book;
        }
      })
    );
  }

  function addBookToCart(id) {
    setCart((prevCart) => [...prevCart, books.find((book) => book.id === id)]);
  }

  const cartTotal =
    cart.length > 0
      ? cart.reduce((prev, next) => prev.count + next.count)
      : null;

  return <h1>Hello from shop</h1>;
};

export default Shop;
