import React from "react"
import ProductCard from "./ProductCard"


export default function ProductList ({productList, handleAddToCart}) {

    const product = productList.map((product) => {
        return(
            <ProductCard
                key={product.id}
                product={product} 
                handleAddToCart={handleAddToCart} />
            // <img className="productImg" src={product.image} alt={product.name} /><br/>
            // {product.name}<br/>
            // {product.description}<br/>
            // ${product.price}<br/>
            
        )})

    return (
        <div>
            <div className="productHeader">Salsas available for purchase this week: </div>
            {product}
        </div>
    )
}