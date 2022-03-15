import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../B-Products/ProductCart.css"

const CartItem = () => {
  const   dispatch=useDispatch()
  const cartItem = useSelector((state) => state.productReducer.cart);
  console.log(cartItem);
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {cartItem.map((item) => {
        return (
          <div>
            <h3>{item.title }</h3>
            <img src={item.image} width="150px" height="150px" alt="" />
            <h3>Price:{item.price}</h3>
            <Link to="/details">
              <button className="b2">Details</button>
            </Link>
            <button className="b3" onClick={()=>dispatch({type:"REMOVE_ITEM",data:item})}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
