import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating , hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* take rating number, fill it # time, map through that # */}
          {Array(rating)
            .fill()
            .map((_, i) => (  // item and index 
              <p>⭐️</p>
            ))}
        </div>
        {!hideButton && (
            <button className="checkoutProduct_remove" onClick={removeFromBasket}>Remove from Bucket</button>
        )}
      
      </div>
    </div>
  );
}

export default CheckoutProduct;
