// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Box1 from "./components/Box1";
import Teams from "./components/Teams";
import Box2 from "./components/Box2";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { ShopContextProvider } from "./context/shop-context";
// import Aboutus from "./components/Aboutus";
function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Box1 />
              <Teams />
              <Box2 />
        {/* <Aboutus/> */}
            </>
          }
        />
        <Route
          path={"/page-2"}
          element={
            <>
              <Page2 />
            </>
          }
        />
        <Route
          path={"/page-3"}
          element={
            <>
              <Page3 />
            </>
          }
        />

        {/* <Page3/> */}
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
