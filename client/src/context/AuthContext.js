import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);
  const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();



  const loginUser = async (email, password) => {
    try {
      const response = await fetch("https://auth-wiki-team10.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data)

      if (response.status === 200 || response.status === 201) {

        //setAuthTokens(data);
        setUser(jwt_decode(data.accessToken))
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
        
        
      }
    } catch (error) {
      //console.log(error)

    }
  }


  const registerUser = async (name, email, password) => {
    try {
      const response = await fetch("https://auth-wiki-team10.herokuapp.com/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      navigate("/login")
      //console.log(response)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Name or Email is Taken');
      } else {
        setErrMsg('Registration Failed')
      }

    }
  }

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };


    // DOCUMENTATION
  

  // MAIN DOCUMENTATION
  




  const contextData = {
    user,
    errMsg,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.accessToken));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <span>Loading...</span> : children}
    </AuthContext.Provider>
  );
}
