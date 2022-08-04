import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/images/logo-auth.png"

//components
import UserInfo from '../userInfo/UserInfo'
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return <div className= "navigation">
       <div className= "navigation__left">
        <div className="container__left--logo">
          <Link to= "/">
          <img src={Logo} alt="auth-logo" />
        </Link>
        </div>
        
        <div className="navigation__left--links">
          <NavLink to = "/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>

        <NavLink to= "/docs" className={({ isActive }) => (isActive ? "active" : "")}>
          Documentation
        </NavLink>

        <NavLink to= "/community" className={({ isActive }) => (isActive ? "active" : "")}>
          Community
        </NavLink>
        </div>
        
       </div>

       <div className="navigation__right">

         {user ? (
            <>
              <UserInfo />
              <button>{logoutUser}</button>
            </>
          ) : (
            <>
              <Link to = "/login">
                <button id="login">Login</button>
              </Link>

              <Link to = "/signup">
                <button  id="signup">Sign Up</button>
              </Link>
            </>
          )}
       </div>
  </div>;
};

export default Navigation;
