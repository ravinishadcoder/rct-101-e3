import React, { useState } from "react";

const Product = ({id,name,description}) => {
  const [count,setCount]=useState(0)
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"
        onClick={()=>setCount((pre)=>pre+1)}
        >+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" 
        onClick={()=>setCount((pre)=>pre-1)}
        >-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
  );
};

export default Product;
