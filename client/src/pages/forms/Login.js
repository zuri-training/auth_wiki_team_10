import { React, useContext } from "react";
import { Link } from 'react-router-dom'

//Context
import AuthContext from "../../context/AuthContext";


//CSS File
import './Forms.css'

//Image Imports
import Exclamation from '../../assets/images/exclamation.png'
import GoogleIcon from '../../assets/images/google-icon.png'
import OfficeDesk from '../../assets/images/office-desk.png'
import EyeFill from '../../assets/svgs/eye-fill.svg'
import EyeSlash from '../../assets/svgs/eye-slash-fill.svg'






const Login = () => {
    const { errMsg, loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    email.length > 0 && loginUser(email, password);
  };

  return (
    <div className='auth__container'>
      <div className="auth__container--left">
        <img src={OfficeDesk} alt="office desk" className="office-desk"/>
        </div>

        <div className="auth__container--right">
          <div>
            <h2>Welcome Back...</h2>
            <p>Log in to continue</p>
            {errMsg && <span>{errMsg}</span> }
            <form id="form" onSubmit={handleSubmit}>

              <div className="inputControl">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="example@gmail.com" />
                <div className="error__container">
                  <div className="err">
                    <img src={Exclamation} alt="exclamation" className="exclamation" id='exclamation' />
                    <div className="error" id="error">Email is required</div>
                  </div>
                </div>
              </div>

              <div className="inputControl">
                <label htmlFor="password">Password</label>
                <div className="input">
                  <input id="password" name="password" type="password" />
                  <img src={EyeFill} alt="eye-fill" id="show" className="eye" />
                  <img src={EyeSlash} id="hide" alt="eye" className="eye-slash" />
                </div>
                <div className="error__container">
                  <div className="err">
                    <img src={Exclamation} alt="exclamation" className="exclamation" id='exclamation-2' />
                    <div className="error" id="error-2">Password is required</div>
                  </div>
                  <div className="forgotPassword">
                    <Link to={"./forgotpassword"}>Forgot Password?</Link>
                  </div>
                </div>
              </div>

              <div className="terms__and__conditions">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <small
                  >I agree to the <Link to={'/community'}>terms of service</Link> and <Link to={'/community'}>privacy policy.</Link></small
                >
              </div>

              <div className="buttons__row">
                <button id="submit" type="submit">Log In</button>

                <strong className="or">or</strong>

                <button id="google">
                    <img src={GoogleIcon} alt="google-icon" width="25px" height="25px" />
                     <span>Continue with Google</span> 
                </button>

                <small
                  >Don't have an account yet?<Link to={'/signup'}>Sign Up</Link></small
                >
              </div>
            </form>
          </div>
      </div></div>
  )
}

export default Login