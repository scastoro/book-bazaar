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
      <section className="item-info">
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
          min={0}
          className="item-input"
          value={product.count}
          onChange={(e) => onChangeHandler(e.target.value, product.id)}
        />
        <button
          className="item-add-btn"
          onClick={() => addBtnHandler(product.id)}
        >
          +
        </button>
      </section>
      <p className="product-total">
        {"$"}
        {+product.price * +product.count}
      </p>
    </section>
  ));

  return (
    <section role="dialog" className="cart">
      <h3 className="cart-title">Shopping Cart</h3>
      <section className="cart-items">{productsList}</section>
      <section className="h-rule"></section>
      <p className="total">Order total: ${total}</p>
      <section className="cart-btns">
        <button className="btn checkout-btn">Checkout</button>
        <button className="btn close-btn" onClick={toggleCartHandler}>
          Close
        </button>
      </section>
    </section>
  );
};

export default Cart;
