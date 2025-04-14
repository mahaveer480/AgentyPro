import React, { useState } from 'react';
import './css/nav.css';
import Talkeen from '../assets/talkeenlogo.png';
import { Link } from 'react-router-dom';

const Navbardeshtop = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <img src={Talkeen} alt="SaleRush Logo" className="navbar-logo" />
          </div>
          <ul className="navbar-center">
            <li><a href="#Hometext">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <a href="#">Pages ▾</a>
              <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <li><Link to="/dashboard">Desktop</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>

          <div className="navbar-right">
            <Link to="/signup">
              <button className="signup-button-nav">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbardeshtop;
