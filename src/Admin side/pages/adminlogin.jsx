import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../styles/Adminlogin.css';
import { HiOutlineMenu } from 'react-icons/hi';
import Sidebar from '../component/Sidenavigaction2';

export default function Adminlogin() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    setShowSidebar(true);
    setTimeout(() => setShowSidebar(false), 5000); // Hide after 5s
  };

  return (
    <div className="admin-login-wrapper">
      {isMobile && (
        <button className="hamburger-button" onClick={handleMenuClick}>
          <HiOutlineMenu size={28} />
        </button>
      )}
      {showSidebar && <Sidebar />}

      <div className="admin-login-form-container">
        <h1 className="admin-login-title">Welcome Back!</h1>
        <input type="email" placeholder="Email" className="admin-login-input" />
        <input type="password" placeholder="Password" className="admin-login-input" />

        <Form className="admin-login-checkbox">
          <Form.Check type="checkbox">
            <Form.Check.Input type="checkbox" isValid />
            <span className="terms-text">
              I agree to the <a href="#">Terms and Conditions</a>
            </span>
          </Form.Check>
        </Form>

        <Link to="/client-accounts" className="admin-login-button-link">
          <button className="admin-login-button">Login</button>
        </Link>
      </div>
    </div>
  );
}
