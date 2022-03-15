import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductCart.css"

const ProducCard = ({ item }) => {
  const dispatch=useDispatch();
  return (
    <div>
       <h3>{item.title.slice(0, 11)  }</h3>
      <img src={item.image}  width="150px" height="150px" className="prodImg" alt="" />
      <h3>Price={item.price}</h3>
      <button className="b1" onClick={()=>dispatch({type:"ADD_CART",data: item })}>Add To Cart</button>
      <Link to="/details">
        <button className="b2" onClick={()=>dispatch({type:"SELECTED_ITEM",data:item})}>Details</button>
      </Link>
    </div>
  );
};

export default ProducCard;
