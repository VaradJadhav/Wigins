import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../context/shop-context";

export default function Navbar() {
  const cartData = useContext(ShopContext)
 
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="my-navbar-collapse">
          <a className="navbar-brand" href="/">
            <img src="W.png" id="brand" alt="" />
            <img src="I.png" id="brand" alt="" />
            <img src="G.png" id="brand" alt="" />
            <img src="I.png" id="brand" alt="" />
            <img src="N.png" id="brand" alt="" />
            <img src="s.png" id="brand" alt="" />
          </a>
          {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#teams">
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#clients">
                Items
              </a>
            </li>
            <li className="nav-item">
              <Link
                to={"/page-3"}
                className="nav-link"
                //  id="Cart"
                href="#"
              >
                Cart: { Object.keys(cartData.cartItems).length }
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#h1">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
