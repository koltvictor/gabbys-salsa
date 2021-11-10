import React from "react"
import ProductCard from "./ProductCard"


export default function ProductList ({productList, handleAddToCart}) {

    const product = productList.map((product) => {
        return(
            <ProductCard
                key={product.id}
                product={product} 
                handleAddToCart={handleAddToCart} />
            
        )})

    return (
        <div>
            <div className="productHeader">Salsas available for purchase </div>
            <div className="productList">
                {product}
            </div>
        </div>
    )
}