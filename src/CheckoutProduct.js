import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [ dispatch] = useStateValue(); // get the basket from the state, i take the basket object

  const removeFromBasket = () => {
    // Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><span >⭐</span></p>
            ))}
        </div>
        <button
          className="checkoutProduct__remove"
          onClick={removeFromBasket}
        >
          Remove from Basket{" "}
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
