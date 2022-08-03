import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/images/logo-auth.png"

const Navigation = () => {
  return <div className= "navigation">
       <div className= "navigation__left">
        <div className="container__left--logo">
          <Link to= "/">
          <img src={Logo} alt="auth-logo" />
        </Link>
        </div>
        
        <div className="navigation__left--links">
          <NavLink to = "/" activeClassname= "active">
          Home
        </NavLink>

        <NavLink to= "/docs" activeClassname= "active">
          Documentation
        </NavLink>

        <NavLink to= "/community" activeClassname= "active">
          Community
        </NavLink>
        </div>
        
       </div>

       <div className="navigation__right">
        <Link to = "/login">
         <button id="login">Login</button>
        </Link>

        <Link to = "/signup">
         <button  id="signup">Sign Up</button>
        </Link>
       </div>
  </div>;
};

export default Navigation;
