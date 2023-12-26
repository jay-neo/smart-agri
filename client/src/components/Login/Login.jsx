import React, { useState } from 'react';
import "./Login.css"

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="login-popup">
        <h3>Log in</h3>
        <div className="login-form">

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={username}
            onChange={handleUsernameChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={handlePasswordChange}
          />

          <button className='login-btn'>Login</button>
        </div>
      </div>
    </>
  );
};

export default App;

// ReactDOM.render(<App/>,document.getElementById('root'));