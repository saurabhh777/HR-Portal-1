import React, { useState } from 'react'
import './NewPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
// import './PasswordStrength.css'





export default function NewPassword({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });
  const [password, setPassword] = useState('');

  const testResult = zxcvbn(password);
  const num = testResult.score * 100 / 4;
  console.log(testResult)
  const createPassLabel = () => {
    switch (testResult.score) {

      case 0:
        return 'Too Short';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#750103';
      case 1:
        return '#f0484b';
      case 2:
        return '#eed80f';
      case 3:
        return '#11a7e7';
      case 4:
        return '#00d823';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className="n-login">


      <form onSubmit={submitHandler}>


        <div className="n-form-inner">


          <h2>Set new password</h2>
          <p>Your new password must be different from previously used password</p>


          <div className="rules">
            <strong>Password Must:</strong>
            <ul>
              <li className='regular'>Be between 12 and 32 characters</li>
              <li className='regular'>Include characters such as:</li>
              <li className="small">An uppercase letter</li>
              <li className="small">A lowercase letter</li>
              <li className="small">A number</li>
              <li className="small">A special character</li>
            </ul>
          </div>


          <div className="n-form-group" id='indicator'>
            <input type="password"
              className='input-css'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
            {/* <PasswordStrength password={password} className='password'/> */}
            <div className="title">
              <strong>Password Strength: </strong>{createPassLabel()}
            </div>

            <div className="progress" >
              <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
          </div>


          <div className="n-form-group">
            <input type="password" name="password2" placeholder='Confirm Password' className='input-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required />
          </div>


          <div className="button">
            <Link to={"/new"}>
              <Button
                type="submit"
                className="n-form-button"
              > Reset Password
              </Button>
            </Link>
          </div>


        </div>

      </form>




    </div>
  )
} 