import React, { useEffect, useState } from "react";
import Card from "./Card";
import booksInfo from "../books";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setBooks(booksInfo);
  }, []);

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

  function decrementCount(id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            count: --book.count,
          };
        } else {
          return book;
        }
      })
    );
  }

  function incrementCount(id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            count: ++book.count,
          };
        } else {
          return book;
        }
      })
    );
  }

  function addBookToCart(id) {
    setCart((prevCart) => [
      ...prevCart,
      { ...books.find((book) => book.id === id) },
    ]);
  }

  const cartTotal =
    cart.length > 0 ? cart.reduce((prev, next) => prev + +next.count, 0) : 0;

  const booksList =
    books.length > 0
      ? books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            img={book.img}
            count={book.count}
            price={book.price}
            id={book.id}
            onChangeHandler={countOnChange}
            addBtnHandler={incrementCount}
            subBtnHandler={decrementCount}
            addCartBtnHandler={addBookToCart}
          />
        ))
      : null;

  return (
    <section className="shop">
      <section role="status" className="cart">
        Items in Cart: {cartTotal}
      </section>
      <section className="book-container">{booksList}</section>
    </section>
  );
};

export default Shop;
