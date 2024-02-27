import React from "react";
import "./Box2.css";
export default function Box2() {
  return (
    <>
    <h1 id="heading2">OR CHECK OUT OUR ITEMS !</h1>
      <div className="container">
        <picture>
          <div className="item">
            <div className="img-wrap">
              <img src="Hoodie.png" id="brand1" alt="" />
              <img src="Tshirts.png" id="brand1" alt="" />
              <img src="FaceMask.png" id="brand1" alt="" />
            </div>
          </div>
        </picture>
      </div>
      <h1 id="h1">OR HEAD TO THE AUCTION !</h1>
      <h1 id="h1">NEXT AUCTION AT 23RD APRIL 2023 | 8 PM IST</h1>
      <div className="row">
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_snow.jpg"
            alt="Snow"
            style={{ width: "90%" }}
          />
        </div>
        <div className="column">
          {/* <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="Forest" style={{"width": "100%"}}/> */}
          <h1 style={{ color: "white" }}>OR</h1>
        </div>
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_mountains.jpg"
            alt="Mountains"
            style={{ "max-width": "90%", "max-height": "100%" }}
          />
        </div>
      </div>
      <h1 id="h1">About Us</h1>
      <span>
        <p
          style={{
            color: "#FFFFFF",
            "font-size": "25px",
            "max-width": "99%",
            "max-height": "100%",
            "font-family":"Saira",
          }}
        >
          WIGINS IS A IIIT LUCKNOW PROJECT WHOSE NAME WAS INSPIRED BY TWO MOST
          IMPORTANT LOCATIONS OF OUR CAMPUS : WIFI GARDEN AND VIRGIN CIRCLE. WE
          AIM TO PROVIDE A PLATFORM WHERE DIFFERENT CLUBS AND SOCIETIES OF IIIT
          LUCKNOW TO SHOWCASE AND SELL THEIR MERCHANDISE. WIGINS AIMS TO PROVIDE
          BEST QUALITY SERVICES AND WE ARE SUPER HAPPY TO ANNOUNCE OUR
          PARTNERSHIP WITH YÜVA, THE SOCIAL SERVICES CLUB OF IIIT LUCKNOW 20%
          PROFITS OF OUR PURCHASE IS DIRECTLY SHARED WITH YÜVA IN THEIR MISSION
          TO PROVIDE DIFFERENT OPPORTUNITIES FOR GROWTH TO DIFFERENT CHARITIES
          ACROSS LUCKNOW !
        </p>
      </span>
      <img
      id="collge"
        src="IIIT Home 1.png"
        style={{ "max-width": "99%", "max-height": "100%" }}
        alt=""
      />
    </>
  );
}
