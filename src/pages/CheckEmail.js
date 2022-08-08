import React, { useState } from 'react'
import './CheckEmail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




export default function CheckEmail({ Login, error }) {


  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="c-login">

{/* <br /><br /> <br /><br /> */}
      <form onSubmit={submitHandler}>


        <div className="c-form-inner">

          

          <h2>Check your Email</h2>
          <p>We sent a password reset link to abc@prissoft.net</p>
          <div className="c-button">
            {/* <Button
              type="submit"
              className="c-form-button"
            > Close
            </Button> */}

            <Link to={"/reset"}>
            <Button
              type="submit"
              className="c-form-button"
            > Close
            </Button>
            </Link>
          </div>

          <br /> 
          
          <div className="c-message">
            Didn't recieve the email? 
            <a href="/check">&nbsp; Click to resend</a>
          </div>

        </div>

      </form>




    </div>
  )
} 
