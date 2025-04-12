import React from 'react'
import Form from 'react-bootstrap/Form';
import '../styles/Adminlogin.css'
import { Link } from 'react-router-dom';

export default function Adminlogin() {
  return (
    <div id='adminloginmaincontainermain'>
        <div id='adminloginmaincontainer'>
<h1 id='adminloginwelcome'>Welcome Back!</h1>
<input type="email"  placeholder='Email' id="admininput" />
<br />
<input type="password" placeholder='Password' id="admininput" />

<div>
<Form>
      {['checkbox'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} >
            <Form.Check.Input type={type} isValid />
              <p id='paroftreams'>
                
                i agreed to the <a href="#">Terms and condiction</a>
                </p>
              <Form.Check.Label></Form.Check.Label>
            <Form.Control.Feedback type="valid">
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
    </Form>



<Link to={"/client-accounts"}>

 <button id='adminloginbutton' >Login</button>
</Link>



</div>



        </div>





    </div>
  )
}
