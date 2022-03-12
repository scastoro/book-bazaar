import React from "react";

const Card = ({
  title,
  img,
  count,
  price,
  id,
  onChangeHandler,
  addBtnHandler,
  subBtnHandler,
  addCartBtnHandler,
}) => {
  return (
    <section key={id} className="card">
      <h3 className="card-heading">{title}</h3>
      <img className="card image" src={img} alt={title} />
      <p className="card-price">{price}</p>
      <label htmlFor="price">Price:</label>
      <button onClick={() => subBtnHandler(id)}>-</button>
      <input
        className="card-price"
        value={count}
        onChange={(e) => onChangeHandler(e.target.value, id)}
      />
      <button onClick={addBtnHandler}>+</button>
      <button onClick={() => addCartBtnHandler(id)}>Add to cart</button>
    </section>
  );
};

export default Card;
