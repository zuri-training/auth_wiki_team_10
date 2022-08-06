import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import Signup from './forms/Signup'
import Login from './forms/Login'
import Forgotpassword from './forms/Forgotpassword'
import Verifyemail from './forms/Verifyemail'
import Documentation from './documentation/Documentation';
import MainDocumentation from './detailedDocs/MainDocumentation';
import Community from './community/Community';

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {< LandingPage />} />
            <Route path='/signup' element = { <Signup/> } />
            <Route path='/login' element = { <Login/> } />
            <Route path='/forgotpassword' element = { <Forgotpassword/> } />
            <Route path='/verify' element = { <Verifyemail/> } />
            <Route path='/docs' element = {<Documentation />} />
            <Route path='/maindocs' element = {<MainDocumentation />} />
            <Route path='/community' element = {< Community />} />
        </Routes>
    </div>
  )
}

export default Pages