import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); // this is the data layer

  const addToBasket = () => {
    // addToBasket is a function that will be called when the button is clicked
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span>🌟</span>
              </p>
            ))}
        </div>
        {/* Array create an array and fill the rating and map it together */}
        {/* // this is the rating */}
      </div>

      <img src={image} alt="img" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
