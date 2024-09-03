import React from 'react';
import Logo from '../assets/Logo.png'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
      {/* Logo */}
      <div className="mb-6">
        {/* Ensure Logo path is correct */}
        <img src={Logo} alt="Not Found" className="w-64 h-64 object-contain" />
      </div>
      
      {/* Message */}
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-bl from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        The page you are looking for might have been removed, <br />
        had its name changed, or is temporarily unavailable.
      </p>

      {/* Back to Home Button */}
        <button className="bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
            onClick={() => {navigate("/signin/")}}
        >
          Back to Home
        </button>
    </div>
  );
};

export default NotFound;
