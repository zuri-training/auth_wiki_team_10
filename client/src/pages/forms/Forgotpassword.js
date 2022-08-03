import React from 'react'
import { Link } from 'react-router-dom'

//CSS File
import './Forms.css'

//Imported Files
import ForgotPassword from '../../assets/images/pwd.png'

const forgotpassword = () => {
  return (
    <div className= 'auth__container'>
      <div className="auth__container--left">
          <img src={ForgotPassword} alt="office desk" class="pwd"/>
        </div>

        <div className="auth__container--right">
          <div>
            <h2>Forgotten your Password?</h2>
            <p>Follow these steps to reset your Password</p>
            <form id="form" action="">

              <div className="inputControl" id="control">
                <label for="email">Enter your Account E-mail</label>
                <input id="email" name="email" type="text" placeholder="example@gmail.com" />
                <div className="error"></div>
              </div>

              <div className="buttons__row">
                <button id="reset"  type="submit">Send Reset Link</button>
              </div>

              <div className="buttons__row">
                <button id="pwd" type="submit"><Link to={'/login'}>Back</Link></button>
              </div>

            </form>
          </div>
       </div>
    </div>
  )
}

export default forgotpassword