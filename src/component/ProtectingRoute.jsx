import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
import { REFRESH_TOKEN, ACCESS_TOKEN} from '../constant';

const ProtectingRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
          setIsAuthenticated(false);
          return;
        }

        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          await refreshToken();
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate]); // Adding navigate to dependencies

  const refreshToken = async () => {
    try {
      const response = await fetch('https://backendforbrainflow.onrender.com/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: localStorage.getItem(REFRESH_TOKEN) }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(ACCESS_TOKEN, data.access);
        setIsAuthenticated(true);
      } else {
        throw new Error('Failed to refresh token');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      setIsAuthenticated(false);
      navigate('/signin');
    }
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectingRoute;
