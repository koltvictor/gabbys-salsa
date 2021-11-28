import React from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom';

export default function Cart({ handleAddToCart, handleRemoveFromCart, currentUser, items}) {
    
    const itemsPrice = items.reduce((a,c) => a + c.price * c.qty, 0)
    const shippingPrice = itemsPrice < 73 ? 20 : 40;
    const taxPrice = itemsPrice * .0825;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const history = useHistory();

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalPrice,
              },
            },
          ],
        });
    };

    function deleteItem() {
        localStorage.removeItem('cartItems')
        history.push('/products')
        window.location.reload()
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(history.push('/thankyou'));
    };

    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    
    return(
            <div className="checkoutStart">
                <h1 className="cartHeader">{currentUser.name}'s Cart</h1>
                <div className="cartContainer">
                
                <div className="emptyCart">
                    {items.length === 0 && <div className="emptyCart"> Your Cart is Empty </div> }
                    
                </div>
                
                {items.map((item) => (
                    <div key={item.id} className="cartItem"> 
                        <img src={item.image} alt={item.name} height="100" width="100"></img>
                        <br/><br/>
                        <div>{item.name}</div>
                        <br/>
                        <div>
                            <button className="addButton" onClick={()=>handleAddToCart(item)}> + </button>
                            <button className="removeButton" onClick={()=>handleRemoveFromCart(item)}> - </button>
                        </div><br/>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))} <br/><br/><div className="buttonPosition">
                <button className="emptyCartButton" onClick={() => deleteItem()}>Clear Cart</button>
                </div>
            {items !== 0 && (
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
                    
                    <div className="payPalButton">
                        <PayPalButton 
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                            totalPrice={totalPrice}
                        />
                    </div>       
                </div>
            )}
            </div>
            
        </div>
            )}