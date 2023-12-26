import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

  return (
    <>
      <div className="footer">
        <br/>
        <ul>
          <li><Link to="/termsandcondition">Terms and Conditions</Link></li>|
          <li><Link to="/about">About Us</Link></li>|
          <li><Link to="/help">Help</Link></li>
        </ul>
        <p>This website belongs to Smart Agri-AI Project <br />Copyright ©2023, Inc. All rights reserved.</p><br/>
      </div>
    </>
  )
}

export default Footer