import React from 'react';
import '../styles/Signup.css'; // NEW CSS file for SignUp
import mobile from "../images/image 23.png";
import google from '../images/google (1).png';
import facebook from "../images/facebook (1).png";
import { Link } from 'react-router-dom';

export default function Signuppage() {
  return (
    <div className="signup-container">
      {/* LEFT SECTION */}
      <div className="signup-left">
        <img
          src={mobile}
          alt="Talkeen Assistant"
          className="signup-image"
        />
        <h2 className="signup-heading">
          Talkeen is here to<br /> Revolutionize Your Sales
        </h2>
        <p className="signup-subtext">
          Handle leads, resolve doubts,<br /> and win deals — all on autopilot.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="signup-right">
        <div className="signup-card">
            
            
            <div>
          <h2 className="signup-title">Create Your Account</h2>

          <div className="signup-socials">
            <button className="signup-social-btn">
              <img id="signup-social-icon" src={google} alt="Google login" />Google
            </button>
            <button className="signup-social-btn">
              <img id="signup-social-icon" src={facebook} alt="Facebook login" />Facebook
            </button>
          </div>

          <p className="signup-or">Or with Email</p>

          <input placeholder="Email" className="signup-input" />
          <input placeholder="Password" type="password" className="signup-input" />

          <label className="signup-terms">
            {/* <input type="checkbox" style={{ marginRight: '8px' }} /> */}
            <Link id="signup-link2" to="/forgotpassword">Forgot password?</Link>
          </label>

          <Link to={'/dashboard'}>  <button className="signup-button">Sign Up</button></Link>

          <p className="signup-switch-text">
            Already have an account? <Link id="signup-link" to="/login">Log in</Link>
          </p>
        </div>
      </div></div>
    </div>
  );
}
