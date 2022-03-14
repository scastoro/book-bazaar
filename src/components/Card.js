import React from "react";

const Card = ({
  title,
  img,
  price,
  count,
  id,
  onChangeHandler,
  addCartBtnHandler,
}) => {
  return (
    <section key={id} className="card">
      <img className="card-image" src={img} alt={title} />
      <h3 className="card-heading">{title}</h3>
      <label className="card-label" htmlFor="quantity">
        Quantity:
        <input
          type="number"
          id="quantity"
          className="card-input"
          value={count}
          onChange={(e) => onChangeHandler(e.target.value, id)}
        />
      </label>
      <p className="card-price">${price}</p>
      <button className="card-btn" onClick={() => addCartBtnHandler(id)}>
        Add to cart
      </button>
    </section>
  );
};

export default Card;
