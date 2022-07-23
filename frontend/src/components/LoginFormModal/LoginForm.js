// frontend/src/components/LoginForm/index.js
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  // const [credential, setCredential] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h1 className="login-header">Welcome to Airbnb</h1>
      <label>
        <input
          type="text"
          placeholder="Email"
          className="login-input email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="password"
          placeholder="Password"
          className="login-input password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        className="login-button"
      >Log In</button>
    </form>
  );
}

export default LoginForm;
