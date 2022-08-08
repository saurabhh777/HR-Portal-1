import React, { useState } from 'react'
import './ForgotPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function ForgotPassword({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });





  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="f-login">


      <form onSubmit={submitHandler}>


        <div className="f-form-inner">

          <br /><br /> <br />

          <h2>Forgot Password?</h2>
          <p>No worries, we'll send you reset instructions.</p>
          <br />
          <div className="f-form-group">
            <input type="text" name="username" id="username" placeholder='Enter your username' className='f-btn-css' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
          </div>

          <div className='f-or'>Or</div>

          <div className="f-form-group">
            <input type="email" name="email" id="email" placeholder='Enter your email' className='f-btn-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          </div>
<br />
          <div className="f-button">
            {/* <Button
                type="submit"
                className="form-button"
              > Reset Password
              </Button> */}

            <Link to={"/check"}>
              <Button
                type="submit"
                className="f-form-button"
              > Reset Password
              </Button>
            </Link>
          </div>

          <br />
          
          <div className="f-login">
            {/* <a href='#'>
            ← Back to log in
            </a> */}
            <Link to={"/"}>← Back to log in</Link>
          </div>

        </div>

      </form>




    </div>
  )
} 