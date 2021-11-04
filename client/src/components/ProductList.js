import { useState, useEffect } from "react"


export default function ProductList () {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    return (
        <div>
            <div className="productHeader">Salsas available for purchase this week: </div>
            <div>
                {productList.map((product) => {
                    return(
                    <div className="productCard" key={product.id}>
                        <img className="productImg" src={product.image} alt={product.name} /><br/>
                        {product.name}<br/>
                        {product.description}<br/>
                        ${product.price}
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}