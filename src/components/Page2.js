import React, { useState, useCallback, useContext, useMemo } from "react";
import "./Page2.css";
import { ShopContext } from "../context/shop-context";
import PRODUCTS from "../list";
import { CartItem } from "../pages/cart/cart-item";
import RecCard from "./RecCard";




export default function Page2() {
  const cartDetails = useContext(ShopContext)
  console.log({ cartDetails })

  const [recData, setRecData] = useState(null);
  const [buttonName, setButtonName] = useState('');
  const [showRec, setShowRec] = useState(false);
  const addToCart = (id) => {
    console.log({ id })
    const name = PRODUCTS[id].name

    var formdata = new FormData();
    formdata.append("button", name)

    var requestoptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    fetch('http://127.0.0.1:5000/', requestoptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRecData(data)
      })
      .catch(error => { alert("Hi"); console.error(error) });

    cartDetails.addToCart(id)
    console.log(name)
  }


  return (
    <>
      <div className="container">
        <img src="Axios.png" id="ing" alt="" />
        <h1>XIOS</h1>
        <p>
          THE TECHNICAL CLUB OF INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,
          LUCKNOW
        </p>
        <h2>RECCOMONDATIONS FOR YOU</h2>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "2rem" }}>

        { recData && recData.map((rec) => (
          <RecCard imageSrc={rec.image} title={rec.title} />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {
          Object.keys(PRODUCTS).map((id) => (
            <div className="Img">
              <CartItem data={PRODUCTS[id]} />
              <button class="btn-hover color-1" onClick={() => addToCart(id)} >
                {PRODUCTS[id].name}
              </button>
            </div>
          ))
        }
      </div>
    </>
  );
}
