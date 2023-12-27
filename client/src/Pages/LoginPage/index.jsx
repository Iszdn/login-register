import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './index.css';
import axios from "axios"
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AuthContext);

  

 async function handleLogin(e) {
  e.preventDefault();
try {
  const res = await axios.post("http://localhost:5000/login",{
    username:username,
    password:password
  })
  const data=res.data
  setToken(data)

} catch (error) {
  console.error('Error during login:', error);
}

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button> {/* Add type attribute */}
      </form>
    </div>
  );
};

export default LoginPage;
