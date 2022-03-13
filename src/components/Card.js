import React from "react";

const Card = ({ title, img, price, id, addCartBtnHandler }) => {
  return (
    <section key={id} className="card">
      <h3 className="card-heading">{title}</h3>
      <img className="card image" src={img} alt={title} />
      <p className="card-price">{price}</p>
      <label htmlFor="price">Price:</label>
      <button onClick={() => addCartBtnHandler(id)}>Add to cart</button>
    </section>
  );
};

export default Card;
