import React, { useState } from "react";
import NavigationBar from "../A-Navigation/NavigationBar";
import ProductsList from "../B-Products/ProductsList";
import CartItem from "../C-Cart/CartItem";
import ProductDetails from "../D-Details/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartLeft from "../C-Cart/CartLeft"
import "./Landing.css"

const Landing = () => {
  const [text, setText] = useState("");
  return (
    <div>
          <div className="c2">
        <BrowserRouter>
        <CartLeft setText={setText} />
          <Routes>
          <Route path="/cart" element={<CartItem />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="c1">
        <BrowserRouter>
          <NavigationBar setText={setText} />
          <Routes>
            <Route path="/" element={<ProductsList text={text} />} />
            <Route path="/details" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </div>
  );
};

export default Landing;
