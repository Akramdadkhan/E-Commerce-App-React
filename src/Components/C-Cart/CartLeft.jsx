import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css"

const NavigationBar = ({}) => {
  const cartItem=useSelector((state)=>state.productReducer.cart)
  return (
    <div>
      <Link className="cart" to="/cart">🛒:{cartItem.length}</Link>
    </div>
  );
};

export default NavigationBar;
