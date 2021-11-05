import React from 'react';

export default function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * .0813;
    const shippingPrice = itemsPrice > 150 ? 0 : 18;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    console.log(cartItems)

    return(
            <div>
                <h2 className="cart">Shopping Cart</h2>
                <div className="emptyCart">
                    {cartItems.length === 0 && <div> Cart is Empty </div> }
                </div>
                {cartItems.map((item) => (
                    <div key={item.id}> 
                        <img src={item.image} alt="kolt says so" height="50" width="50"></img>
                        <div>{item.name}</div>
                        <div className="addRemButtons">
                            <button onClick={()=>handleAddToCart(item)} className="add"> + </button>
                            <button onClick={()=>handleRemoveFromCart(item)} className="remove"> - </button>
                        </div>
                        <div className="itemPrice">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))} 
            {cartItems.length !== 0 && (
                <div className="checkout">
                    <hr></hr>
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

                    <hr></hr> 
                    
                    <div>
                        <button>
                            Checkout
                        </button>
                    </div>       
                </div>
            )}
            </div>
            
            )}