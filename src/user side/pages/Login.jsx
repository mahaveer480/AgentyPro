import React from 'react'
import '../styles/Login.css'
export default function Loginpage() {
  return (
    <div>
      
      <div id='logindiv'>
<div id='imagediv'>
<img src={require("../images/loginimage.png")} id='loginimage' alt="My Image" />

</div>




<div id='inputdiv'> 
  
<h2>Signup for an account</h2>
<div id='buttondiv'>
<button id='googlebutton'><img src={require("../images/google (1).png")} id='goolgeimg' alt="Google" /> Google</button>
  <button id='facebookbutton'><img src={require("../images/facebook (1).png")} id='facebookimg' alt="Faccebook" /> Facebook</button>
</div>
<br />
<p>---------------------- Or with Email ----------------------</p>




</div>
      </div>



    </div>
  )
}
