import React from "react";
import "./Box1.css";
export default function Box1() {
  return (
    <div className="container">
      <picture>
        <div class="item">
          <div class="img-wrap">
            <img src="image.png" id="brand1" alt="" />
            <img src="image1.png" id="brand1" alt="" />
            <img src="image.png" id="brand1" alt="" />
          </div>
        </div>
      </picture>
      <div class="centered" id="teams">WELCOME TO WIGINS</div>
      <div class="centered1">THE OFFICIAL GOODS STORE OF IIIT LUCKNOW</div>
    </div>
  );
}
