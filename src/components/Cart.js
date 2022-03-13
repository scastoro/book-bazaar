import React from "react";

const Cart = ({
  products,
  total,
  onChangeHandler,
  addBtnHandler,
  subBtnHandler,
  toggleCartHandler,
}) => {
  const productsList = products.map((product) => (
    <section key={product.id} className="item-list">
      <h4 className="item-title">{product.title}</h4>
      <img className="item-img" src={product.img} alt="" />
      <label htmlFor="count">Quantity: </label>
      <button
        className="item-sub-btn"
        onClick={() => subBtnHandler(product.id)}
      >
        -
      </button>
      <input
        type="number"
        id="count"
        value={product.count}
        onChange={(e) => onChangeHandler(e.target.value, product.id)}
      />
      <button
        className="item-add-btn"
        onClick={() => addBtnHandler(product.id)}
      >
        +
      </button>
      <p className="product-total">
        {"$"}
        {+product.price * +product.count}
      </p>
    </section>
  ));

  return (
    <section role="dialog" className="cart">
      <h3>Shopping Cart</h3>
      <section className="cart-items">{productsList}</section>
      <p className="total">Order total: ${total}</p>
      <button className="checkout-btn">Checkout</button>
      <button className="close-btn" onClick={toggleCartHandler}>
        Close
      </button>
    </section>
  );
};

export default Cart;
