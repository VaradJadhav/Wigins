import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../list";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // for (let i = 1; i < PRODUCTS.length + 1; i++) {
  //   cart[i] = 0;
  // }
  return cart;
};

export const ShopContextProvider = (props) => {

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")||"{}"))
  }, [])

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    Object.keys(cartItems).forEach((id) => {
      totalAmount += ( cartItems[id].price * cartItems[id].count )
    })
    return totalAmount;
  };

  const addToCart = (itemId) => {
    
    setCartItems((prev) => {
      if (prev.hasOwnProperty(itemId)) {
      prev[itemId].count += 1;
      } else
      prev[itemId] = {...PRODUCTS[itemId], count: 1}
      return {...prev};
    });

    localStorage.setItem("cart", JSON.stringify(cartItems))

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev.hasOwnProperty(itemId))
      delete prev[itemId]
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      prev[itemId].count = newAmount;
    });
  };

  const getCartItems = async () => {
    return Object.keys(cartItems).map((itemId) => ( { id: itemId, ...cartItems[itemId] } ))
  }

  const getCartItemCount = () => {
    let res = 0;
    Object.keys(cartItems).forEach((id) => {
      res += ( cartItems[id].count )
    })
    return res;
  }


  const checkout = async (itemName) => {
    // setCartItems(getDefaultCart());
    // await fetch("http://localhost:5000/addCart", {
    //   method: "POST",
    //   body: JSON.stringify(getDefaultCart()),
    // }).then((response) => {
    //   console.log(response);
    // })
    // await fetch(`http://127.0.0.1:5000/`, {
    //   method: "POST",
    //   body: JSON.stringify({ 'name': itemName })
    // })
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getCartItemCount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
