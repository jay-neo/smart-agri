import React, { useState } from 'react';
import "./Login.css"
import api from '~/api';
import Popup from 'reactjs-popup';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('Enter your email here');


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
      window.location.reload();
    } catch (error) {
      setEmail('')
      setPassword('');
      setLoginError(error.response ? error.response.data.message : "Server Error");
    }
  }

  return (
    <>
      <Popup
        trigger={<button className="button">Login</button>}
        modal
        nested
      >
        {close => (
          <div className="modal">

            <div className="content">
              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="login-input"
                  placeholder={loginError}
                  value={email}
                  onChange={handleEmail}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="login-input"
                  value={password}
                  onChange={handlePassword}
                  required
                />

                <button
                  className="login-btn"
                  type="submit"
                  disabled={isSubmitDisabled}
                  style={isSubmitDisabled ?
                    { backgroundColor: '#007bff', color: 'white', cursor: 'default' }
                    : {}
                  }
                >
                  Login
                </button>
              </form>
            </div>


          </div>
        )}
      </Popup>


    </>
  );
};

export default Login;
