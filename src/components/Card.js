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
      <h3 className="card-heading">{title}</h3>
      <img className="card image" src={img} alt={title} />
      <p className="card-price">{price}</p>
      <label className="card-label" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="number"
        id="quantity"
        className="card-input"
        value={count}
        onChange={(e) => onChangeHandler(e.target.value, id)}
      />
      <button onClick={() => addCartBtnHandler(id)}>Add to cart</button>
    </section>
  );
};

export default Card;
