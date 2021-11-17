import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Me({ currentUser, setCurrentUser }) {

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const history = useHistory();

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
                history.push('/me')
            })
            } else {
            res.json().then(errors => {
                console.log(errors)
            })
            }
        })
    }
    

    return (
        <div>
            <div>
                <h1 className="accountHead">{currentUser.name}'s Account Info</h1>
            </div>
            <div className="accountWrapper">
                <h3>Username:</h3>
                <p>{currentUser.username}</p>
                <h3>Email on file:</h3>
                <p>{currentUser.email}</p><br /><br/>

                <h3>{currentUser.name}'s Password Reset</h3>
                <p>If you would like to reset your password, please fill out below.</p>
                <form onSubmit={handleUpdatePassword}>
                <p>
                    <label className='label'>
                        Password
                    </label>
                    <input
                        type="password"
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputField"
                    />
                    </p>

                    <p>
                    <label className='label'>
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="inputField"
                    />
                    </p>
                    <button className="resetButton">Reset Password</button>
                </form>
                
            </div>
        </div>
    );
}