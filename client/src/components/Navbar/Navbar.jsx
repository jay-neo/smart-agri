import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../../components/Login/Login'

const Navbar = () => {

  return (
    <>
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
          <ul>
              <li><Login /></li><b>|</b>
              <li><Link to="/signin">Sign in</Link></li>
            </ul>
        </div>

      </nav>



    </>
  )
}

export default Navbar