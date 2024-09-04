import React from 'react';
import './LoginRegister.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;