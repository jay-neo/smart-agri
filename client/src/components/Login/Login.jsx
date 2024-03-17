import React, { useState } from 'react';
import "./Login.css"
import api from '~/api';
import Notification from '../Notification/Notification';

const App = () => {

  const [notification, setNotification] = useState({ type: '', message: '' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const isSubmitDisabled = (!email || !password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/login', { email, password });
    } catch (error) {
      setNotification({ type: 'res-err', message: error });
      setEmail('');
      setPassword('');
    }
    window.location.reload();
  }

  return (
    <>
      <Notification type={notification.type} message={notification.message} />
      <div className="login-popup">
        <h3>Log in</h3>
        <form className="login-form" onSubmit={handleSubmit}>

          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            className="login-input"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={handlePassword}
          />

          <button
            className='login-btn'
            type="submit"
            disabled={isSubmitDisabled}
            style={isSubmitDisabled ?
              { backgroundColor: '#007bff', color: 'white', cursor: 'default' }
              : {}
            }>Login</button>
        </form>
      </div>
    </>
  );
};

export default App;
