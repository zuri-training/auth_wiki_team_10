import { useRef, useState, useEffect } from "react";
// import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from '../../api/axios';
import { Link } from "react-router-dom";

//CSS File
import './Forms.css'

//Image Imports
import Exclamation from '../../assets/images/exclamation.png'
import GoogleIcon from '../../assets/images/google-icon.png'
import OfficeDesk from '../../assets/images/office-desk.png'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email)
    const v3 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user, email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      //setSuccess(true);

      //clear state and controlled inputs
      setUser('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Name or Email is Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus();
    }
  }

  return (

    <div className='auth__container register'>
      <div className="auth__container--left">
        <img src={OfficeDesk} alt="office desk" className="office-desk" />
      </div>

      <div className="auth__container--right">
        <div>

          <h2 style={{ marginTop: "7rem" }}>Create An Account...</h2>
          <p>Get started with us</p>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"><img src={Exclamation} alt="exclamation" />{errMsg}</p>
          <form id="form" onSubmit={handleSubmit}>
            <div className="inputControl">
              <label htmlFor="fullname">Username</label> <br />
              <input type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />

              {/* error area */}
              <div id="uidnote" className={userFocus && !validName ? "instructions" : "offscreen"}>
                <img src={Exclamation} alt="exclamation" />
                4 to 24 characters.
                Must begin with a letter.<br />
              </div>
            </div>
            {/* error area ends */}

            <div className="inputControl">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="confirm_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />

              {/* error area */}
              <div id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                <img src={Exclamation} alt="exclamation" />
                Invalid email
              </div>
            </div>
            {/* error area ends */}

            <div className="inputControl">
              <label htmlFor="password">Password</label> <br />
              <input type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />


              {/* error area */}
              <div id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <img src={Exclamation} alt="exclamation" />
                8 to 24 characters.
                Must include uppercase and lowercase letters, a number and special character @ or #.<br />
              </div>
            </div>
            {/* error area ends */}

            <div className="inputControl">
              <label htmlFor="password">Confirm Password</label> <br />
              <input type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />

              {/* error area */}
              <div id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <img src={Exclamation} alt="exclamation" />
                Must match the first password input field.
              </div>
            </div>
            {/* error area ends */}



            <div className="terms__and__conditions">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <small
              >I agree to the <Link to={'/community'}>terms of service</Link> and <Link to={'/community'}>privacy policy.</Link></small
              >
            </div>

            <div className="buttons__row">
              <button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false} id="signup__button"> <span>Sign Up</span></button>

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