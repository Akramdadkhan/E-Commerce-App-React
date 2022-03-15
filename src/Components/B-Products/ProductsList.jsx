import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ProducCard from './ProducCard';
import { useDispatch,useSelector } from 'react-redux';
 
 
const ProductsList = ({text}) => {
    const allProducts=useSelector((state)=>state.productReducer.products)
    const [products,setProducts]=useState([])
    const dispatch=useDispatch();
    console.log(products)
    const getProducts=async ()=>{
        const apiData=await axios.get("https://fakestoreapi.com/products")
        // console.log ("------>",apiData)
      allProducts.length === 0 &&  dispatch({type:"ADD-PRODUCTS",data:apiData.data})
        setProducts(apiData.data)
    };
    useEffect(()=>{
     const filterd=allProducts.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()))
     setProducts(filterd)
    },[text])
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div style={{ display:"flex", flexWrap:'wrap' }}>
            
            {products.map((item)=>{
                return <ProducCard item={item}/>
            })}
        </div>
    );
};

export default ProductsList;