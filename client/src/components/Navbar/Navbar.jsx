import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Login from '../../components/Login/Login'
import Notification from '../Notification/Notification';
import api from '~/api'


const Navbar = () => {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userCredential, setUserCredential] = useState('');
  const [notification, setNotification] = useState({ type: '', message: '' });

  const handleLogout = async () => {
    try {
      await api.delete('/logout');
      setUserCredential('');
      setIsAuthenticated(false);
      navigate('/');
      window.location.reload();
    } catch (error) {
      setNotification({ type: 'res-err', message: error });
    }
  };

  const handleProfile = async () => {
    try {
      console.log(userCredential);
      const uid = userCredential.username;
      navigate(`/user/${uid}`);
      window.location.reload();
    } catch (error) {
      console.log(error.response)
      setNotification({ type: 'res-err', message: error });
    }
  };

  useEffect(() => {
    return async () => {
      try {
        const res = await api.get('/user');
        setUserCredential(res.data);
        setIsAuthenticated(true);
      } catch (error) {
        // setNotification({ type: 'res-err', message: error });
      }
    }
  }, [])


  return (
    <>
      <Notification type={notification.type} message={notification.message} />
      <nav className="navbar">
        <div className="navbar-title">
          <a href="/"><h2>Smart Agri-AI</h2></a>
        </div>

        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/programs">Programs & Schemes</Link></li>
          </ul>
        </div>

        <div className="auth">
          {isAuthenticated ? (
            <ul className="dropdown">
              <li><button onClick={handleProfile}>{userCredential.name}</button></li><b>|</b>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          ) : (
            <ul>
              <li><Login /></li>
              <li><b><Link to="/signin">Sign in</Link></b></li>
            </ul>
          )}
        </div>

      </nav>
    </>
  )
}

export default Navbar