import React from 'react'
import { Link } from 'react-router-dom'

//CSS files
import './Documentation.css'

//Images
import ViewIcon from '../../assets/images/view.png'

//Components
import Navigation from '../../components/top-navigation/Navigation'
import Footer from '../../components/footer/Footer'


const Documentation = () => {
  return (
    <div>
      <Navigation/>
      <main id='docs__container'>
        <section id="getting-started">
          <h1>Getting Started</h1>
          <p>
            A Comprehensive page on Auth-wiki Documentation and related
            information
          </p>
        </section>
        <section id="intro">
          <h3 class="m-bottom">Introduction</h3>
          <p class="margin">
            Auth-wiki provides a comprehensive collection of authentication
            codes for developers. Extremely flexible and modular, Auth wiki
            codes can be dropped into any Express based Web application for use.
            It is a beginner friendly Authentication library that ranges from
            login and sign up authentication to the most complicated of
            authentications, this Documentation will help you understand
            Auth-wiki and apply it in your various applications.
          </p>
        </section>
        <section class="section">
          <div class="div1">
            <h3>Token-Based Authentication</h3>
            <p class="margin">
              A protocol that generates encrypted security tokens. It enables
              users to verify their identity to websites, which then generates a
              unique encrypted authentication token. The token Provides users
              with access to protected pages and resources for a limited period
              of time without having to re-enter their username and password.
              Token-based authentication works through this five-step process...
            </p>
          </div>
          <div class="top div2">
            <div class="flex">
              <img src={ViewIcon} class="vector" alt="" />
              <Link to={'/'} class="link b-bottom">
                View full Documentation
              </Link>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="div1">
            <h3>Password-Based Authentication</h3>
            <p class="margin">
              This is the process of gaining access to resources which one is
              entitled to with the help of a set of credentials containing
              username and password. This is a rampantly used method known for
              process simplicity and low cost, when a password is created, a
              copy of that is stored by the website or system in a secure
              credentials database...
            </p>
          </div>
          <div class="top div2">
            <div class="flex">
              <img src={ViewIcon} class="vector" alt="" />
              <Link to={'/'} class="link b-bottom">View full Documentation</Link>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="div1">
            <h3>Multi-Factor Authentication</h3>
            <p class="margin">
              This security technology requires multiple methods of
              authentication from independent categories of credentials to
              verify a user's identity for a login or other transactions. It
              combines two or more independent credentials: what the user knows,
              such as password; what the user has, security token and what the
              user is, biometric verification...
            </p>
          </div>
          <div class="top div2">
            <div class="flex">
              <img src={ViewIcon} class="vector" alt="" />
              <Link to={'/'} class="link b-bottom">View full Documentation</Link>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="div1">
            <h3>The Community</h3>
            <p class="margin">
              We have a healthy and welcoming community built around some
              guidelines you must follow. We allow Signed in Users to view,
              interact, comment, download or copy and also drop a reaction to
              our authentication codes. But it is important that you are a
              verified user of Auth Wiki before you are liable to enjoy all the
              benefits.
            </p>
          </div>
          <div class="top div2">
            {/* <div class="flex">
              <Link to={'/'} class="link">Auth-Wiki community guidelines</Link>
            </div>
            <div class="flex">
              <Link to={'/'} class="link">Report a problem</Link>
            </div> */}
          </div>
        </section>
        <section className="signup">
          <p>
            Get unlimited access to all of Auth-wiki features today, join us. 
          </p>
          <h1>Enhance your productivity, <span>Register Now!</span></h1>
          <Link to={'/signup'}><button type="submit">Sign up</button></Link>
          
        </section>
      </main>
      <Footer />
      </div>
  )
}

export default Documentation