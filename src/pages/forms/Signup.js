import React from 'react'
import { Link } from 'react-router-dom'

//CSS File
import './Forms.css'

//Image Imports
import Exclamation from '../../assets/images/exclamation.png'
import GoogleIcon from '../../assets/images/google-icon.png'
import OfficeDesk from '../../assets/images/office-desk.png'


const signup = () => {
  return (
    <div className='auth__container register'><div class="auth__container--left">
          <img src={OfficeDesk} alt="office desk" class="office-desk"/>
        </div>

        <div class="auth__container--right">
          <div>
            <h2>Create An Account...</h2>
            <p>Get started with us</p>
            <form id="form" action="">
              <div class="inputControl">
                <label for="fullname">Full Name</label> <br />
                <input id="fullName" name="fullname" type="text" />
                <div class="error__container">
                <div class="err">
                  <img src={Exclamation} alt="exclamation" class="exclamation" />
                <span class="error"></span>
                </div>
                </div>
              </div>

              <div class="inputControl">
                <label for="email">Email</label> <br />
                <input id="email" name="email" type="text"/>
                <div class="error__container">
                <div class="err">
                  <img src={Exclamation} alt="exclamation" class="exclamation" />
                <span class="error"></span>
                </div>
                </div>
              </div>

              <div class="inputControl">
                <label for="password">Password</label> <br />
                <input id="password" name="password" type="password" />
                <div class="error__container">
                <div class="err">
                  <img src={Exclamation} alt="exclamation" class="exclamation" />
                <span class="error"></span>
                </div>
                </div>
              </div>

              <div class="inputControl">
                <label for="password">Confirm Password</label> <br />
                <input id="password2" name="password2" type="password"/>
                <div class="error__container">
                <div class="err">
                  <img src={Exclamation} alt="exclamation" class="exclamation" />
                <span class="error"></span>
                </div>
                </div>
              </div>

              <div class="terms__and__conditions">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <small
                  >I agree to the <Link to={'/community'}>terms of service</Link> and <Link to={'/community'}>privacy policy.</Link></small
                >
              </div>

              <div class="buttons__row">
                <button type="submit">Sign up</button>

                {/* there should be redirect here to verifypage */}

                <strong class="or">or</strong>

                <button id="google">
                    <img src={GoogleIcon} alt="google-icon" width="25px" height="25px" />
                     <span>Continue with Google</span> 
                </button>

                <small
                  >Do you have an account already? <Link to={'/login'}>Log in</Link></small
                >
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default signup