import React, { useState } from 'react'
import './PasswordReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function PasswordReset({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="p-login">


      <form onSubmit={submitHandler}>

 
        <div className="p-form-inner">

          <h2>Password has been reset</h2>
          <p>Your password has been successfully reset.</p>
          <br />
          <div className="button">
            {/* <Button
              type="submit"
              className="form-button"
            > Log In
            </Button> */}
            <Link to={"/"}>
            <Button
              type="submit"
              className="p-form-button"
            > Log In
            </Button>
            </Link>
          </div>
          

        </div>

      </form>




    </div>
  )
} 