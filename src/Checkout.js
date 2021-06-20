import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_722-usen_d_reciprocalhero_1500x200"
          alt="amazon ad"
        />
        <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {
              basket.map(item =>(
                 <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                 />
              ))
            }
           
        </div>
      </div>

      <div className="checkout__right">
          <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
