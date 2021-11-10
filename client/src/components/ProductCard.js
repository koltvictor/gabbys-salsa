import React from 'react';

export default function ProductCard({product, handleAddToCart}) {


    return(
        <div className="productCard">
                <img className="productImg" src={product.image} alt={product.name} /><br/>
                {product.name}<br/>
                {product.description}<br/>
                ${product.price}<br/>
                <button onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
        </div>
    )
}