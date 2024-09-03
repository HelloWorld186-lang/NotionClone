import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Documentation from './page/Documentation';
import LandingPage from './page/LandingPage';
import Notes from './page/Notes';
import Signin from './page/Signin';
import Signup from './page/Signup';
import NotFound from './page/NotFound';
import NavBar from './component/NavBar'; 
import toast , { Toaster } from 'react-hot-toast';
import ProtectingRoute from './component/ProtectingRoute'
import { ACCESS_TOKEN , REFRESH_TOKEN } from './constant';

const Logout = () =>{
  const navigate = useNavigate()
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  navigate('/signin/');
  window.location.reload();
}

const App = () => {
  return (
    <Router>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Documentation />} />
        <Route
          path="/notes"
          element={
            <ProtectingRoute>
              <Notes />
            </ProtectingRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/signout" 
          element={
            <ProtectingRoute>
              <Logout />
            </ProtectingRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;