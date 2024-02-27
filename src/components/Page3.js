import React, { useContext, useEffect, useState } from "react";
import "./Page3.css";
import { ShopContext } from "../context/shop-context";
import PRODUCTS from "../list";
import { CartItem } from "../pages/cart/cart-item";


export default function Page3() {
  const [items, setItems] = useState([])

  const cartData = useContext(ShopContext)


  return (
    <>
      {items.map((item, index) => {
        return <div key={index} className="float-container">
          <div className="float-child1">
            <div className="imgg">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="float-child2">
            <div className="blue">
              <h1 style={{ "color": "white" }} >{item.name}</h1>
              <h3>BY TEAM AXIOS</h3>
              <p>COST PER PIECE : Rs 1000 DELIVERY TIME : 8 - 10 DAYS</p>
              <h3 onClick={(e) => { }}>REMOVE ITEMS</h3>
            </div>
          </div>
        </div>
      })}


      {/* <div>
      <h1 style={{"textAlign":"center"}}>  RECCOMONDATIONS FOR YOU  </h1>
      <div>{JSON.stringify()}</div>
      </div> */}

      <div>
        <h1 id="heading"> IF YOUR TOTAL AMOUNT IS MORE THAN 1000, YOU CAN'T CHOOSE CASH ON DELIVERY </h1>
        {/* <h1 id="heading">TOTAL ITEMS : {cartData.getCartItemCount()} </h1> */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", flexDirection: "row" }}>
         {
          PRODUCTS.map((item,index)=>{
            return(
              <div >
                <img src={item.image}></img>
                <h1 style={{color:"white"}}>{item.name}</h1>
              </div>
            )
          })
         }
        </div>
        {/* <h1 id="sub">AMOUNT TO PAY : Rs {cartData.getTotalCartAmount()} </h1> */}
      </div>
      <div className="inputbox">
        <div className="input-container">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Middle Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="input-container">
          <input type="text" placeholder="Roll No" />
          <input type="text" placeholder="Batch Year" />
          <input type="text" placeholder="Batch" />
        </div>

        <div className="input-container">
          <input type="text" placeholder="Room No" />
          <input type="text" placeholder="Email No" />
          <input type="text" placeholder="Phone No" />
        </div>
      </div>
      <div>
        {/* <h1 id="sub1">CHOOSE PAYMENT METHOD</h1> */}
        <button class="btn-hover color-1" onClick={() => {
          if (cartData.getTotalCartAmount() > 1000) alert("CASH ON DELIVERY NOT AVAILABLE")
          cartData.checkout();
        }}>CHECKOUT</button>
      </div>
      {/* // </div> */}
    </>
  );
}
