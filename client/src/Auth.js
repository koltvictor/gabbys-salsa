import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Me from './components/Me'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'

export default function Auth({ currentUser, setCurrentUser }) {

    return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/products">
                <ProductList currentUser={currentUser} />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            {/* <Route exact path="/FAQs">
                <FAQs />
            </Route> */}
            <Route exact path= "/">
                <LogIn setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path= "/logout">
                <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
            <Route path='/me'>
                <Me currentUser={currentUser} />
            </Route>
        </Switch>
    </div>
  );
}