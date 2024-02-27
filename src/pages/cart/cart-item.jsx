import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p style={{color:"white"}}>
          <b>{name}</b>
        </p>
        <p style={{color:"white"}}> Price: ${price}</p>
        
      </div>
    </div>
  );
};
