import React from 'react';
import '../styles/Login.css'; // Importing the CSS
import mobile from "../images/image 23.png"
import google from '../images/google (1).png'
import facebook from "../images/facebook (1).png"
import { Link } from 'react-router-dom';



export default function Loginpage() {
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
          <h2 className="form-title">Sign up for an account</h2>

          <div className="social-buttons">
            <button className="social-btn"><img id='social-btn-img' src={google} alt="google image" /> Google</button>
            <button className="social-btn"><img id='social-btn-img' src={facebook} alt="facebook" /> Facebook</button>
          </div>

          <p className="or-text">Or with Email</p>

          <div className="input-row">
            <input placeholder="First Name" className="input" />
            <input placeholder="Last Name" className="input" />
          </div>

          <input placeholder="Email" className="input" />
          <input placeholder="Phone No." className="input" />
          <input placeholder="Password" type="password" className="input" />

          <label className="terms">
            <input type="checkbox" id='cheakedinput' style={{ marginRight: '8px' }} />
            I agree to the <Link id='setcolorblack2' to={"/setting1"}>Terms & Conditions</Link> 
          </label>

          <Link to={'/homepage'}>  <button className="create-btn">Create account</button></Link>

          <p className="sign-in-text">
            Already had an account? <Link id='setcolorblack' to={"/"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
