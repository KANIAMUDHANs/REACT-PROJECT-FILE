import React from 'react';
import './LoginRegister.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" required/>
          </label>
          <label>
            Password:
            <input type="password" name="password" required/>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;