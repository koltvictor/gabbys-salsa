import React from 'react';

export default function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * .0825;
    const shippingPrice = itemsPrice > 20 ? 0 : 18;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    console.log(cartItems.qty)

    return(
            <div>
                <h2 className="cart">Shopping Cart</h2>
                <div className="emptyCart">
                    {cartItems.length === 0 && <div> Cart is Empty </div> }
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cartItem"> 
                        <img src={item.image} alt={item.name} height="50" width="50"></img>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={()=>handleAddToCart(item)}> + </button>
                            <button onClick={()=>handleRemoveFromCart(item)}> - </button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))} 
            {cartItems.length !== 0 && (
                <div>
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
                    
                    <div>
                        <button>
                            Checkout
                        </button>
                    </div>       
                </div>
            )}
            </div>
            
            )}