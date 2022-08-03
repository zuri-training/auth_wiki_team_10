import React from 'react'
import { Link } from 'react-router-dom';

//CSS File
import './Forms.css'

//image Imports
import Verify from '../../assets/images/Saly-43.png'

const verifyemail = () => {
  return (
    <div className= 'auth__container'>
      <div className="auth__container--left">
          <img src={Verify} alt="verify" class="pwd"/>
        </div>

        <div className="auth__container--right">
          <div>
            <h2>Verify your E-mail</h2>
            <p>A link has been sent to johndanejhon@gmail.com, use it to sign in to your account  </p>
            <form id="form" action="">

              <div className="buttons__row">
                <button id="reset"  type="submit">Open your Mail app</button>
              </div>

              <div className="buttons__row">
                <button id="pwd" type="submit"><Link to={'/login'}>Resend link</Link></button>
              </div>

            </form>
          </div>
       </div>
    </div>
  )
}

export default verifyemail