import React, { useEffect, useState } from "react";
import axios from "axios"
import {Product} from "./Product"
const Products = () => {
 const [Products,setProducts]=useState([])
 useEffect(()=>{
   axios.get("http://localhost:8080/products")
   .then(({data})=>{
     setProducts(data)
   })
 },[])
  return <div><h1>Produtcs</h1>
  <br />
  <div style={{display:"flex",gap:"5px"}}>
    {Products.map((product)=>(
      <Product key={product.id}{...product}/>
    ))}
  </div>
  </div>;
};

export default Products;
