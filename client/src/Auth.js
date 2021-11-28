import './App.css';

import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductList from './components/ProductList';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Me from './components/Me'
import Faqs from './components/Faqs'
import Cart from './components/Cart'
import ThankYou from './components/ThankYou'
import Admin from './components/Admin'
import ProductCard from './components/ProductCard'

export default function Auth({ currentUser, setCurrentUser }) {
    const [cartItems, setCartItems] = useState([])
    const [productList, setProductList] = useState([])
    const history = useHistory();
    const items = JSON.parse(localStorage.getItem('cartItems'))

    useEffect(() => {
        fetch('/api/products')
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
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      console.log(localStorage)
  }

    function handleRemoveFromCart(product){
        const itemExist = cartItems.find(x => x.id === product.id)
      
        if (itemExist.qty === 1){
          setCartItems(cartItems.filter((x) => x.id !== product.id))
        }
        else {
          setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty - 1 } : x))
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
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
              localStorage.clear()
            }
          })
      };

      // function adminDelete(){
      //   const itemExist = cartItems.find(x => x.id === product.id)
      //     if (itemExist) {
      //         fetch(`/api/products/id`, {
      //           method: 'DELETE',
      //         })
      //           .then(res => {
      //             if (res.ok) {
      //               setProductList(productList)
      //             }
      //           })
      //       };
      //     }
    return (
    <div>
      
        <Header 
        items={items}
        currentUser={currentUser} 
        handleLogout={handleLogout} 
        />
        <Switch>
            <Route exact path="/">
                <Home 
                currentUser={currentUser}
                />
            </Route>
            <Route exact path="/products">
                <ProductList 
                currentUser={currentUser} 
                handleAddToCart={handleAddToCart}
                productList={productList}
                cartItems={cartItems} />
            </Route>
            <Route exact path="/about">
                <About 
                currentUser={currentUser}
                />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/FAQs">
                <Faqs />
            </Route>
            <Route exact path='/me'>
                <Me 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                cartItems={cartItems}
                />
            </Route>
            <Route exact path='/cart'>
                <Cart 
                cartItems={cartItems} 
                handleAddToCart={handleAddToCart} 
                handleRemoveFromCart={handleRemoveFromCart}
                currentUser={currentUser}
                items={items}
                />
            </Route>
            <Route exact path='/thankyou'>
                <ThankYou 
                currentUser={currentUser}
                />
            </Route>
            <Route exact path="/admin">
                <Admin 
                currentUser={currentUser}
                productList={productList}
                cartItems={cartItems}
                setProductList={setProductList}
                />
            </Route>
        </Switch>
        
    </div>
  );
}