import React from "react";
import { Link } from "react-router-dom";

//CSS file
import "./LandingPage.css";

//Images Import
import Search from "../../assets/images/akar-icons_search.png";
import Sketch1 from "../../assets/svgs/sketch_title1.svg";
import Sketch2 from "../../assets/svgs/sketch_title2.svg";
import Slack from "../../assets/svgs/Slack.svg";
import Github from "../../assets/svgs/github.svg";
import ZuriLogo from "../../assets/images/zuri-logo.png";
import i4g from "../../assets/images/I4g.png";
import WhyIcon from "../../assets/svgs/whyIcon.svg";
import DocsIcon from "../../assets/svgs/fluent_people-community-add-28-regular-1.svg";
import Community from "../../assets/svgs/fluent_people-community-add-28-regular.svg";
import Download from "../../assets/images/downloadCode.png";
import Pages from "../.././assets/svgs/akar-icons_copy.svg";
import Fire from "../../assets/svgs/Fire.svg";
import Comments from "../../assets/svgs/fa-regular_comments.svg";
import ReadMe from "../../assets/svgs/authEdit.svg";
import Frame32 from "../../assets/svgs/Frame 32.svg";
import Ellipse34 from "../../assets/svgs/Ellipse 34.svg";
import Ellipse35 from "../../assets/svgs/Ellipse 35.svg";
import Python from "../../assets/svgs/Python Software Foundation.svg";
import Nodejs from "../../assets/svgs/Node.js - jpeg.svg";
import Php from "../../assets/svgs/g3438.svg";
import Arrow2 from "../../assets/svgs/atc__arrow.svg";

const LandingPage = () => {
  return (
    <div className="landingpage">

      <section className="hero_section">
        <form className="form_search">
          <img src={Search} alt="search" />
          <input type="text" placeholder="Search Library" />
        </form>
        <h1>A Library of Authentication <span>Codes</span></h1>

        <p className="intro_text">
          Auth-wiki provides a comprehensive collection of authentication codes
          for developers. Extremely flexible and modular, Auth wiki codes can be
          dropped into any Express based Web application for use.
        </p>
        <form className="form_email">
          <input type="email" placeholder="Enter Email" />
          <button>Get Started</button>
        </form>

        <div className="traffic__container">
          <div className="traffic__item">
            <span>15k+</span>
            <p>monthly visitors</p>
          </div>

          <div className="traffic__item">
            <span>500k+</span>
            <p>authentication codes copied</p>
          </div>

          <div className="traffic__item">
            <span>25k+</span>
            <p>community members</p>
          </div>
        </div>
      </section>

      {/* END of hero section */}

      {/* Brands section */}
      <section id="brands">
        <div className="auth__title">
          <div className="left__title__img">
            <img src={Sketch1} alt="sketch1" />
          </div>
          <div className="right__title__img">
            <img src={Sketch2} alt="sketch2" />
          </div>
          <h3>Brands that Work with Us</h3>
          <p>Meet our Collaborative Partners from across the World</p>
        </div>

        <div className="brand__images">
          <img src={i4g} alt="Zuri" className="brand__image" />
          <img src={ZuriLogo} alt="Zuri" className="brand__image" />
          <img src={Slack} alt="Zuri" className="brand__image" />
          <img src={Github} alt="Zuri" className="brand__image" />
        </div>
      </section>

      {/* BEGINING of why us */}
      <div className="black__bg">
        <section id="why__us">
          <div className="auth__title">
            <div className="why__title__img">
              <img src={WhyIcon} alt="why-icon" />
            </div>
            <h3>Why Choose Auth-Wiki </h3>
            <p>
              Auth-Wiki is specially designed as a home of authentication codes
            </p>
          </div>

          <div className="why__wrapper">
            <div className="why__container">
              <div>
                <span>
                  <img src={DocsIcon} alt="docs" />
                </span>
                <h5>Documentation</h5>
                <p>
                  The use, operation, maintenance of the authentication codes are
                  listed and explained for easy use by the developers.
                </p>
              </div>
            </div>
            <div className="why__container">
              <div>
                <span>
                  <img src={Download} alt="download" />
                </span>
                <h5>Download</h5>
                <p>
                  We provide a download option for Authenticated and verified
                  users to use the codes when they please and in any instance.
                </p>
              </div>
            </div>
            <div className="why__container">
              <div>
                <span>
                  <img src={Community} alt="community" />
                </span>
                <h5>Community</h5>
                <p>
                  Auth-wiki provides a community of developers and codes.
                  Interactions, comments and duplication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of why us section */}

      {/* Auth Codes section */}
      <section id="auth__codes">
        <div className="auth__title atc__2">
          <h3 className="atc__title">Auth-Wiki Authentication Codes</h3>
          <p>
            The Various authentication codes we have for Php, Nodejs and Phython
            Languages
          </p>
        </div>

        <div className="auth__title atc__2">
          <h3 className="atc__title">Token-Based Authentication</h3>
          <p id="atc__p">
            A protocol that generates encrypted security tokens. It enables
            users to verify their identity to websites, which then generates a
            unique encrypted authentication token...
          </p>

          <div className="auth__flex atc__icons">
            <span id="ath__file"><img src={Pages} alt="pages" className="authcode__img" /> 1,500</span>
            <span id="ath__fire"><img src={Fire} alt="fire" className="authcode__img" /> 1,500</span>
            <span id="ath__comment"><img src={Comments} alt="comments" className="authcode__img" /> 1,500</span>
          </div>
        </div>

        <div id="authreadme__img">
          <img src={ReadMe} alt="Auth ReadMe" />
          <div className="atc__nav">
            <span id="">
              <img src={Frame32} alt="frame32" className="authcode__img" />
            </span>
            <span id="">
              <img src={Ellipse34} alt="ellipse34" className="authcode__img" />
            </span>
            <span id="">
              <img src={Ellipse35} alt="ellipse35" className="authcode__img" />
            </span>
          </div>
          <div className="atc__nav atc__lang">
            <span id="">
              <img src={Python} alt="python" className="authcode_img" />
            </span>
            <span id="">
              <img src={Nodejs} alt="nodejs" className="authcode_img" />
            </span>
            <span id="">
              <img src={Php} alt="php" className="authcode_img" />
            </span>
          </div>

          <div id="atc__arr_btn">
            <img src={Arrow2} alt="arrow2" />
            <Link to={"/login"}>
              <button className="nav__btn login__btn">See more details</button>
            </Link>
          </div>
        </div>
      </section>

      {/* end of auth codes section */}

      {/* Beginning of newsletter */}

      <div className="black__bg">
        <section id="newsletter">
          <div id="auth__productivity">
            <p>Get unlimited access to all of Auth-wiki features today, join the Community. </p>
            <h2>Enhance your productivity, <span>Get started!</span></h2>
            <Link to={'/signup'}>
              <button className="nav__btn signup__btn">Sign up</button>
            </Link>

          </div>

          <div className="ath__subscribe">
            <div className="auth__title atc__2">
              <h3 className="atc__title">Subscribe to our newsletter</h3>
              <p>Stay updated on our latest news.
                We promise only valuable mails and
                we will not spam you with unnecessaries.</p>
              <div className="mb-3 input-group ath__waitlist">
                <input type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2" style={{ cursor: "pointer" }}>Subscribe</span>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End of newsletter */}


    </div>
  );
};

export default LandingPage;