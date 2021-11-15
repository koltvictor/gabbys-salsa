import React from 'react';

export default function ProductCard({product, handleAddToCart}) {


    return(
        <div className="productCard">
                <img className="productImg" src={product.image} alt={product.name} /><br/>
                <div className="productName">{product.name}<br/></div><br/>
                <div className="productDescription">{product.description}<br/></div><br/>
                <div className="productPrice">${product.price}<br/></div>
                <button onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
        </div>
    )
}