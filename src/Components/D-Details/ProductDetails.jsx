import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const ProductDetails = () => {
    const dispatch=useDispatch()
    const itemDetails=useSelector((state)=>state.productReducer.details)
    return (
        <div>
            {itemDetails.map((item)=>{
                 return (
                    <div>
                       <h3>{item.title }</h3>
                      <img src={item.image} width="150px" height="150px" alt="" />
                      <h3>Price:{item.price}</h3>
                        <button className='b1' onClick={()=>dispatch({type:"ADD_CART",data:item})}>Add To Cart</button>
                    </div>
                  );
            })}
        </div>
    );
};

export default ProductDetails;