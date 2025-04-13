import React from 'react';
import './css/nav.css';
import Talkeen from '../assets/talkeenlogo.png'
import { Link } from 'react-router-dom';
const Navbardeshtop = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo">
          <img src={Talkeen} alt="Talkeen Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Applications</a></li>
        </ul>

        <div className="navbar-actions">
          <Link to={"/signup"}><button className="signup-btn">Sign Up</button></Link>
          <Link to={"/login"}> <button className="login-btn">Login</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbardeshtop;
