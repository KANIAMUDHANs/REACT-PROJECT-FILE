import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Copy.css'

function Copy() {

    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;
        let errors = {};

        // Simple validation: check if fields are empty
        if (!username) {
            valid = false;
            errors.username = "Username is required";
        }

        if (!password) {
            valid = false;
            errors.password = "Password is required";
        }

        // If validation fails, set error messages
        if (!valid) {
            setErrors(errors);
        } else {
            // Clear errors and handle successful login
            setErrors({});
            console.log("Logged in:", { username, password });
            nav('/home')

            // Add logic here to send credentials to the backend, etc.
        }


    };


    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Copy;
