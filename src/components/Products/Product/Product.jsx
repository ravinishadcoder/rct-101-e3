import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({id,name,description}) => {
  const [count,setCount]=useState(0)
  // Note: this id should come from api
  const {cartItem,updateCartItem,updateItemCount,removeCart}=useContext(CartContext);
  
  const handleUpdate= (newCount)=>{
    console.log("working")
    updateItemCount(id,newCount)
    setCount(newCount)
    
  }
  const handleCartUpdate=(body)=>{
    updateCartItem(body)
    setCount(1)
  }
  useEffect(()=>{
    console.log(count)
  },[count])
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count===0?(
      <button data-cy="product-add-item-to-cart-button"
      onClick={()=>{handleCartUpdate({productId:id,count:1})}}
      >Add to Cart</button>
      ):(
        <div>
        <button data-cy="product-increment-cart-item-count-button"
        onClick={()=>handleUpdate(count+1)}
        >+</button>
        <span data-cy="product-count">
          {
           count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" 
        onClick={()=>handleUpdate(count-1)}
        >-</button>
        <button data-cy="product-remove-cart-item-button"
        onClick={()=>removeCart(id)}
        >remove</button>
      </div>
      )}
      
      
    </div>
  );
};

export default Product;
