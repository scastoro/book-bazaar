import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import booksInfo from "../books";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setBooks(booksInfo);
  }, []);

  function countOnChange(newCount, id) {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: newCount,
          };
        } else {
          return product;
        }
      })
    );
  }

  function decrementCount(id) {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: --product.count,
          };
        } else {
          return product;
        }
      })
    );
  }

  function incrementCount(id) {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
          };
        } else {
          return product;
        }
      })
    );
  }

  function addBookToCart(id) {
    const newBook = { ...books.find((book) => book.id === id) };
    // Check if book exsits in cart
    // If true then combine the count properties
    if (cart.find((product) => product.id === id)) {
      setCart((prevCart) =>
        prevCart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              count: product.count + newBook.count,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      setCart((prevCart) => [...prevCart, newBook]);
    }
  }

  function showCartHandler() {
    setShowCart(!showCart);
  }

  React.useEffect(() => {
    setOrderTotal(
      cart.length > 0
        ? cart.reduce((prev, next) => prev + +next.count * +next.price, 0)
        : 0
    );
  }, [cart]);

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
            addCartBtnHandler={addBookToCart}
          />
        ))
      : null;

  return (
    <section className="shop">
      <section role="status" className="cart">
        Items in Cart: {cartTotal}
      </section>
      <button className="show-cart" onClick={showCartHandler}>
        Go to cart
      </button>
      {showCart && (
        <Cart
          products={cart}
          total={orderTotal}
          subBtnHandler={decrementCount}
          addBtnHandler={incrementCount}
          onChangeHandler={countOnChange}
        />
      )}
      <section className="book-container">{booksList}</section>
    </section>
  );
};

export default Shop;
