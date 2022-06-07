import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider=({children})=>{
  const [cartItem,setCartItem]=useState([])
  useEffect(()=>{
   axios.get("http://localhost:8080/cartItems")
   .then(({data})=>setCartItem(data))
  },[])
  const updateCartItem= async (body)=>{
 return axios.post("http://localhost:8080/cartItems",{...body})
  .then(({data})=>setCartItem([...cartItem,data]))
  }
  const updateItemCount=(productId,newCount)=>{
   //todo
   let item = cartItem.find((item)=>item.productId===productId);
   axios.patch(`http://localhost:8080/cartItems/${item.id}`,{
     count : newCount,
   })
   .then(({data})=>{
    let updatedCartItems = cartItem.map((p)=>{
      if(p.id===item.id){
        return data;
      }else{
        return p;
      }
    })
    setCartItem(updatedCartItems);
   })

  }
  const removeCart= async (productId)=>{
  //todo
  let item = cartItem.find((item)=>item.productId===productId);
  //console.log(item)
  axios.delete(`http://localhost:8080/cartItems/${item.id}`)
  
  }
  useEffect(()=>{
   // console.log(cartItem)
  },[cartItem])
  
  return <CartContext.Provider value={{cartItem,updateCartItem,updateItemCount,removeCart}}>{children}</CartContext.Provider>
}

