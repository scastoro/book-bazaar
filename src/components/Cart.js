import React from "react";

const Cart = ({
  products,
  total,
  onChangeHandler,
  addBtnHandler,
  subBtnHandler,
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
    <section className="cart">
      <h3>Shopping Cart</h3>
      <section className="cart-items">{productsList}</section>
      <p className="total">Order total: ${total}</p>
    </section>
  );
};

export default Cart;
