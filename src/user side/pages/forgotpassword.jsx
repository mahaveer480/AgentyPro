import React from 'react';
import '../styles/Login.css'; // Importing the CSS
import mobile from "../images/image 23.png"
import google from '../images/google (1).png'
import facebook from "../images/facebook (1).png"
    import { Link } from 'react-router-dom';
    
    
    
    export default function Forgotpassword() {
      return (
        <div className="login-container">
          {/* LEFT SECTION */}
          <div className="login-left">
            <img
              src={mobile}
              alt="AI Assistant"
              className="login-image"
            />
            <h2 className="login-heading">Meet Talkeen – Your<br/> Smartest Sales Assistant</h2>
            <p className="login-subtext">
              Convert leads, answer queries, and<br/> close deals – all hands-free.
            </p>
          </div>
    
          {/* RIGHT SECTION */}
          <div className="login-right">
            <div className="login-card">
              <h2 className="form-title">Forgot Password</h2>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
             
    
    
    
              <input placeholder="Email" className="input" />
              <button className="create-btn">Submit</button>
    
              <p className="sign-in-text">
                Already had an account? <Link id='setcolorblack' to={"/"}>Sign in</Link>
              </p>
              <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
            </div>
          </div>
        </div>
      );
    }
    