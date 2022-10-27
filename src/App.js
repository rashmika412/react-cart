import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Cart from "./page/cart";
import "./App.css";
import SingleProduct from "./page/SingleProduct";
import { CartContext } from "./page/CartContext";
import {getCart, storeCart} from "../src/page/helpers";

function App() {
  const [cart, setCart] = useState({});
  // fetch from local storage:

  useEffect(() => {
    // const cart = window.localStorage.getItem('cart');
   getCart().then(cart => {
    setCart(JSON.parse(cart));
   });
    // console.log(JSON.parse(cart));
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
    // window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/Menu" element={<Menu />}></Route>

            <Route path="/products/:_id" element={<SingleProduct />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
