import React, { useState } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'


export default function LogIn({ setCurrentUser }) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          r.json().then(errors => {
            console.log(errors)
          })
        }
      })
  };



  return (
    <div>
    <div className="fullHeader">
        <div className="header">Gabby's Salsa</div>
    </div>
    <div className="login">

      <Redirect to='/' />

      <form onSubmit={handleSubmit}>
        
        <h1 className="loginHeader">Log In</h1>
        <div className="loginForm">
        <p>
          <div className="loginUser">
          <label className="label">
            
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputField"
            placeholder="Username"
            required
          />
          </div>
        </p>

        <p>
          
          <label className="label">          
            
          </label>
          <input
            type={passwordShown ? 'text' : 'password'}
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
            placeholder="Password"
            required
          />
               
          <button onClick={togglePassword} className="togglePassword">👁️</button>

        </p>
        <button className="loginSignupButton" type="submit">Log In</button>
        <Link className="loginButton" to="/signup">Sign Up</Link><br/><br/>
        </div>
        

      </form>
      
    </div>
    </div>
  );
}