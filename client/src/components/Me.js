import React, { useState } from 'react'

export default function Me({ currentUser, setCurrentUser }) {

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
      e.preventDefault();
      setPasswordShown(!passwordShown);
    }

    function handleUpdatePassword(e) {
        e.preventDefault();
        
        fetch('/api/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            password : password,
            password_confirmation: passwordConfirmation
        })
        })
        .then(res => {
            if (res.ok) {
            res.json().then(data => {
                setPassword(data)
                window.location.reload()
            })
            } else {
            res.json().then(errors => {
                console.log(errors)
            })
            }
        })
        alert('Password updated')
    }
    

    return (
        <div className="accountBack">
            <div>
                <h1 className="accountHead">{currentUser.name}'s Account Info</h1>
            </div>
            <div className="accountWrapper">
                <div className="accountInfo">
                <h3>Username:</h3>
                <p>{currentUser.username}</p>
                <h3>Email on file:</h3>
                <p>{currentUser.email}</p><br /><br/>
                
                <h3>Change your password:</h3>
                <form onSubmit={handleUpdatePassword}>
                <p>
                    <label className='label'>
                        Password
                    </label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputField"
                        required
                    />
                    </p>

                    <p>
                    <label className='label'>
                        Confirm Password
                    </label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="inputField"
                        required
                    />
                    <button onClick={togglePassword} className="togglePassword">👁️</button>
                    </p>
                    <button className="resetPasswordButton">Reset Password</button>
                </form>
                </div>
            </div>
        </div>
    );
}