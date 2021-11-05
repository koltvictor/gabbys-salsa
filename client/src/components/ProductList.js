import { useState, useEffect } from "react"


export default function ProductList () {
    const [productList, setProductList] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    function handleAddToCart(product) {
        const itemExist= cartItems.find(x => x.id === product.id)
    
        if (itemExist) {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty + 1 } : x))
        }
        else {
            setCartItems([...cartItems, {...product, qty:1}])
        }
    }
    
    // function handleRemoveCart(tea){
    //   const itemExist = cartItems.find(x => x.id === tea.id)
    
    //   if (itemExist.qty === 1){
    //     setCartItems(cartItems.filter((x) => x.id !== tea.id))
    //   }
    //   else {
    //     setCartItems(cartItems.map(x=> x.id === tea.id ? {...itemExist, qty: itemExist.qty - 1 } : x))
    //   }
    // }

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
                        <button className="addToCart" onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}