import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/top-navigation/Navigation';
import Footer from './components/footer/Footer';
import LandingPage from './pages/landingpage/LandingPage';
import Signup from './pages/forms/Signup'
import Login from './pages/forms/Login'
import Forgotpassword from './pages/forms/Forgotpassword'
import Verifyemail from './pages/forms/Verifyemail'
import Documentation from './pages/documentation/Documentation';
import DetailedDocs from './pages/detailedDocs/DetailedDocs';
import Community from './pages/community/Community';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/documentation/:id" element={ <PrivateRoute> <DetailedDocs /> </PrivateRoute> } />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/verify" element={<Verifyemail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>

  );
}

export default App;
