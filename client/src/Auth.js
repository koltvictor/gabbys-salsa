import './App.css';

import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductList from './components/ProductList';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Me from './components/Me'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'
import Faqs from './components/Faqs'
import Cart from './components/Cart'

export default function Auth({ currentUser, setCurrentUser }) {
    const [cartItems, setCartItems] = useState([])
    const history = useHistory();

    function handleAddToCart(product){
        const itemExist= cartItems.find(x => x.id === product.id)
    
        if (itemExist) {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty + 1 } : x))
        }
        else {
            setCartItems([...cartItems, {...product, qty:1}])
        }
        console.log("Item Added to Cart")
    }

    function handleRemoveFromCart(product){
        const itemExist = cartItems.find(x => x.id === product.id)
      
        if (itemExist.qty === 1){
          setCartItems(cartItems.filter((x) => x.id !== product.id))
        }
        else {
          setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty - 1 } : x))
        }
      }

    const handleLogout = () => {
        fetch(`/api/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
              history.push('/')
            }
          })
      };
    
    return (
    <div>
        <Header currentUser={currentUser} handleLogout={handleLogout}/>
        <Switch>
            <Route exact to="/">
                <Home />
            </Route>
            <Route exact to="/products">
                <ProductList currentUser={currentUser} />
            </Route>
            <Route to="/about">
                <About />
            </Route>
            <Route to="/contact">
                <Contact />
            </Route>
            <Route exact to="/FAQs">
                <Faqs />
            </Route>
            <Route exact to= "/login">
                <LogIn setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact to="/signup">
                <SignUp />
            </Route>
            <Route to='/me'>
                <Me currentUser={currentUser} />
            </Route>
            <Route to='/cart'>
                <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
            </Route>
        </Switch>
    </div>
  );
}