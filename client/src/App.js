import './App.css';
import Auth from './Auth';
import UnAuth from './UnAuth';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);

  useEffect(() => {
    fetch('/api/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [setCurrentUser])

  if(!authChecked) {return <div>Try Logging In!</div>}

  return (
      <Router>
        {currentUser ? (
          <Auth
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnAuth
            setCurrentUser={setCurrentUser}
          />
        )
      }
      </Router>
  );
}