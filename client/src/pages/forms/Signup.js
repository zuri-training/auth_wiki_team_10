import {React, useState, useContext} from 'react'
import { Link } from 'react-router-dom'

//Context
import AuthContext from "../../context/AuthContext";

//CSS File
import './Forms.css'

//Image Imports
import Exclamation from '../../assets/images/exclamation.png'
import GoogleIcon from '../../assets/images/google-icon.png'
import OfficeDesk from '../../assets/images/office-desk.png'


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { errMsg, registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(name, email, password);
  };

  return (
    <div className='auth__container register'><div className="auth__container--left">
          <img src={OfficeDesk} alt="office desk" className="office-desk"/>
        </div>

        <div className="auth__container--right">
          <div>
            <h2>Create An Account...</h2>
            <p>Get started with us</p>
          {errMsg && <span className ="error"><img src={Exclamation} alt="exclamation" />{errMsg}</span> }
            <form id="form" onSubmit={handleSubmit}>
              <div className="inputControl">
                <label htmlFor="fullname">Full Name</label> <br />
                <input id="fullname" name="fullname" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <div className="error__container">
                <div className="err">
                  <img src={Exclamation} alt="exclamation" className="exclamation" />
                <span className="error"></span>
                </div>
                </div>
              </div>

              <div className="inputControl">
                <label htmlFor="email">Email</label> <br />
                <input id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <div className="error__container">
                <div className="err">
                  <img src={Exclamation} alt="exclamation" className="exclamation" />
                <span className="error"></span>
                </div>
                </div>
              </div>

              <div className="inputControl">
                <label htmlFor="password">Password</label> <br />
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div className="error__container">
                <div className="err">
                  <img src={Exclamation} alt="exclamation" className="exclamation" />
                <span className="error"></span>
                </div>
                </div>
              </div>

              <div className="inputControl">
                <label htmlFor="password">Confirm Password</label> <br />
                <input id="password2" name="password2" type="password" onChange={(e) => setPassword2(e.target.value)} required/>
                <div className="error__container">
                <div className="err">
                  {password2 !== password ?( 
                    <span className="error"><img src={Exclamation} alt="exclamation" />"Passwords do not match"</span>
                    ) : 
                  ""}
                  
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
                <button type="submit">Sign up</button>

                {/* there should be redirect here to verifypage */}

                <strong className="or">or</strong>

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

export default Signup