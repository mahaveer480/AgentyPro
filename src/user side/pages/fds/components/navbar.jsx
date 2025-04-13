import React, { useState } from 'react';
import './css/nav.css';
import Talkeen from '../assets/talkeenlogo.png';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbardeshtop = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleLinkClick = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 5000); // 5 seconds
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Top row: Logo + Hamburger */}
        <div className="navbar-top">
          <div className="navbar-logo">
            <img src={Talkeen} alt="Talkeen Logo" />
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <FiMenu size={24} />
          </div>
        </div>

        {/* Menu Links */}
        <ul className={`navbar-links ${showMenu ? 'show-menu' : ''}`}>
          <li><a href="#" onClick={handleLinkClick}>Features</a></li>
          <li><a href="#" onClick={handleLinkClick}>Case Studies</a></li>
          <li><a href="#" onClick={handleLinkClick}>Pricing</a></li>
          <li><a href="#" onClick={handleLinkClick}>Applications</a></li>
        </ul>

        {/* Signup/Login Buttons */}
        <div className={`navbar-actions ${showMenu ? 'show-menu' : ''}`}>
          <Link to="/signup" onClick={handleLinkClick}>
            <button className="signup-btn">Signup</button>
          </Link>
          <Link to="/login" onClick={handleLinkClick}>
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbardeshtop;
