import React, { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setBooks([
      {
        title: "test book 1",
        img: "",
        count: 1,
        price: "25",
        id: "1",
      },
    ]);
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

  const testBook = books[0];
  return (
    <section className="shop">
      <section role="status" className="cart">
        Items in Cart: {cartTotal}
      </section>
      <section className="book-container">
        {testBook && (
          <Card
            title={testBook.title}
            img={testBook.img}
            count={testBook.count}
            price={testBook.price}
            id={testBook.id}
            onChangeHandler={countOnChange}
            addBtnHandler={() => incrementCount(testBook.id)}
            subBtnHandler={decrementCount}
            addCartBtnHandler={addBookToCart}
          />
        )}
      </section>
    </section>
  );
};

export default Shop;
