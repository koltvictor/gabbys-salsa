export default function CartCard({cartItems, item, items, handleAddToCart, handleRemoveFromCart, PayPalButton, onApprove, createOrder}) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const shippingPrice = items < 7 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;
    return(
        <div className="itemCard">
                <img className="itemImg" src={item.image} alt={item.name} height="100" width="100" /><br/><br/>
                <div className="itemName">{item.name}<br/></div><br/>
                <div className="itemPrice">${item.price}<br/></div><br/>
                <button className="addToCartButton" onClick={() => {handleAddToCart(item)}}>Add to Cart</button>
                <button onClick={()=>handleRemoveFromCart(item)}> - </button>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div> 
            {/* {item.length !== 0 && (
                <div className="checkoutEnd">
                    <hr />
                    <div>
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div>
                        <div>
                            <strong>Total Price</strong>
                        </div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>

                    <hr/> 
                    
                    {/* <div className="payPalButton">
                        <PayPalButton 
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                            totalPrice={totalPrice}
                        />
                    </div>        */}
                </div>
    )
}