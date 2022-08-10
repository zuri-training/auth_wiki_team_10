import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//CSS File
import './Forms.css'

//Image Imports
import Exclamation from '../../assets/images/exclamation.png'
import GoogleIcon from '../../assets/images/google-icon.png'
import OfficeDesk from '../../assets/images/office-desk.png'
import EyeFill from '../../assets/svgs/eye-fill.svg'
import EyeSlash from '../../assets/svgs/eye-slash-fill.svg'


import axios from '../../api/axios';
const LOGIN_URL = '/auth';
  

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

<<<<<<< HEAD
const Login = () => {
    const { errMsg, loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
=======
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
>>>>>>> 6321a50a87f96a52060223c6281645bea0d2018b
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }



  return (
    <div className='auth__container'>
      <div className="auth__container--left">
        <img src={OfficeDesk} alt="office desk" className="office-desk"/>
        </div>

        <div className="auth__container--right">
          <div>
            <h2>Welcome Back...</h2>
            <p>Log in to continue</p>
<<<<<<< HEAD
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
=======
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"><img src={Exclamation} alt="exclamation"/>{errMsg}</p>
            <form id="form" onSubmit={handleSubmit}>

              <div className="inputControl">
                <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required />
>>>>>>> 6321a50a87f96a52060223c6281645bea0d2018b
              </div>

              <div className="inputControl">
                <label htmlFor="password">Password</label>
                <div className="input">
                <input 
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required />
                  <img src={EyeFill} alt="eye-fill" id="show" className="eye" />
                  <img src={EyeSlash} id="hide" alt="eye" className="eye-slash" />
                </div>
                
                  <div className="forgotPassword">
                    <Link to={"./forgotpassword"}>Forgot Password?</Link>
                  </div>
               
              </div>

              <div className="terms__and__conditions">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <small
                  >I agree to the <Link to={'/community'}>terms of service</Link> and <Link to={'/community'}>privacy policy.</Link></small
                >
              </div>

              <div className="buttons__row">
              <button id="submit" type="submit" className="login__button"> <span>Log In</span></button>

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

export default Login;