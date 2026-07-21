import React from 'react';
import "./ProductCart.css"

function  ProductCart({product,onClick}) {
    return(
        <div className="product-cart" onClick={onClick}>
          <div className="image-wrap">
            <img src={product.image} alt={product.name}/>
            <span className="category">{product.catogary}</span>  
          </div>
         <div className="info">
          <h3>{product.name}</h3>
          <p className="desc">{product.description}</p>
          <div className="bottom">
           <span className="price">${product.price}</span>
           <button className="btn">Quick View</button>
          </div>
         </div>

        </div>
    )
    
}

export default ProductCart;