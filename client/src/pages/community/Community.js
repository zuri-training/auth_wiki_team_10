import React from 'react'
import './Community.css'

const Community = () => {
  return (
    <main id='community__container'>
      <div className="block-1">
        <h1>Auth-Wiki Community</h1>
        <p>We provide access to a variety of Community Resources that aid your experiences.</p>
      </div>
      <section className="mid">
        <div className="left_texts">
          <div className="block-2">
            <h2>Introduction</h2>
            <p>We have a healthy and welcoming community built around some guidelines you must follow. We allow Signed in Users to view, interact, comment, download or copy and also drop a reaction to our authentication codes. But it is important that you are a verified user of Auth Wiki before you are liable to enjoy all the benefits and Community resources. Enjoy! </p>
          </div>
          <div className="block-3">
            <h2>Community Guidelines</h2>
            <p>We are open cummunity of developers building resources for a better web, regardless of brand, browser, or platform anyone can contribute and each person who does makes us stronger. Together we can continue to drive innovation on the web to serve the greater good. It starts here, with you. Please join us!</p>
          </div>
          <div className="block-4">
            <h2>Code of Conducts</h2>
            <p>Always conduct yourseif professionally. Be kind to others. Do not insult or put down others. Harassment and exclussionary behavior aren’t acceptable. If you notice or see a comment or interaction as scandalous or not proper, you can flag it by reporting. Have fun !</p>
          </div>
        </div>
        <div className="left_texts-1">
          <h2 className="text">FAQ's</h2>
          <div className="blocks">
            <div className="block-5">
              <h3 className="q1" id="q1">What is Multi-Factor Authentication?</h3>
              <p className="a1" id="a1">It’s an electronic authentication method in which a user is granted access to a website or application.</p>
            </div>
            <div className="block-6">
              <h3 className="q2" id="q2">Do you provide codes for python? </h3>
              <p className="a2" id="a2">Yes, Auth-wiki provides codes for 3 programming Languages; Python, Nodejs and Php respectively.</p>
            </div>
            <div className="block-7">
              <h3 className="q3" id="q3">Is it Possible to Download codes?</h3>
              <p className="a3" id="a3">Absolutely, However, this feature is only possible if you are a registered and verified user of Auth-Wiki.</p>
            </div>
            <div className="block-8">
              <h3 className="q4" id="q4">Which Authentication code is best?</h3>
              <p className="a4" id="a4">This basically depends on you and what exactly you need for what you are building.</p>
            </div>
            <div className="block-9">
              <h3 className="q5" id="q5">Why must I Sign up before i Download the codes?</h3>
              <p className="a5" id="a5">Yes, we require you to sign up or log in before you can enjoy all of our amazing features.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-block">
            <div className="resources">
              <h4>Community Resources</h4>
              <p className="community" id="community">Community Introduction & Guidelines</p>
              <p className="faq" id="faq">FAQ's</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Community