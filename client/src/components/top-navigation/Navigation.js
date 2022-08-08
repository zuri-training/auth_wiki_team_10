import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import "./Navigation.css";

//Images import
import Logo from "../../assets/images/logo-auth.png"

//components
import UserInfo from '../userInfo/UserInfo'
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)

    const showNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="navigation">
            <div className="navigation__container">
                <div className="navigation__left">
                    <div className="container__left--logo">
                        <Link to="/">
                            <img src={Logo} alt="auth-logo" />
                        </Link>
                    </div>

                    <div className="navigation__left--links">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            Home
                        </NavLink>

                        <NavLink to="/documentation" className={({ isActive }) => (isActive ? "active" : "")}>
                            Documentation
                        </NavLink>

                        <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : "")}>
                            Community
                        </NavLink>
                    </div>

                </div>

                <div className="navigation__right">

                    {user ? (
                        <div>
                            <UserInfo /> 
                            
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button id="login">Login</button>
                            </Link>

                            <Link to="/signup">
                                <button id="signup">Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>

                <div className="navigation__right__mobile">
                    {!isOpen && (
                        <GiHamburgerMenu
                            style={{ cursor: "pointer" }}
                            onClick={showNav}
                            size={30}
                        />
                    )}
                    {isOpen && (
                        <AiOutlineClose
                            style={{ cursor: "pointer" }}
                            onClick={showNav}
                            size={30}
                        />
                    )}
                </div>
            </div>
            <div
                className={
                    isOpen
                        ? "navigation__container__mobile--links"
                        : "navigation__container__mobile--links--none"
                }
            >
                <NavLink to="/">
                    <p onClick={() => setIsOpen(false)} className="mobile--links">Home</p>
                    <hr />
                </NavLink>

                <NavLink to="/documentation">
                    <p onClick={() => setIsOpen(false)} className="mobile--links">Documentation</p>
                    <hr />
                </NavLink>

                <NavLink to="/community">
                    <p onClick={() => setIsOpen(false)} className="mobile--links">Community</p>
                    <hr />
                </NavLink>

                {user ? (
                    <div>
                        <UserInfo />
                    </div>
                ) : (
                    <>
                        <Link to="/login">
                            <button id="login--mobile">Login</button>
                        </Link>

                        <Link to="/signup">
                            <button id="signup--mobile">Sign Up</button>
                        </Link>
                    </>
                )}
            </div>



        </div>
    );
};

export default Navigation;