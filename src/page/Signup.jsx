import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('https://backendforbrainflow.onrender.com/api/create_user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('User created successfully!'); // Display success toast
        console.log('User created successfully:', data);
        navigate('/signin'); // Redirect to the login page after successful signup
      } else {
        const errorData = await response.json();
        toast.error('Failed to create user:', errorData.error); // Display error toast
        console.error('Failed to create user:', errorData);
        // Handle the error scenario (e.g., show validation errors)
      }
    } catch (error) {
      console.error('Network or other error:', error);
      // Handle any unexpected errors
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo and Brand Name */}
        <div className="flex justify-center items-center mb-8">
          <img src={Logo} alt="Brand Logo" className="w-12 h-12 mr-3" />
          <div className="text-3xl font-bold oleo-script-bold bg-gradient-to-bl from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
            BraniFlow
          </div>
        </div>

        {/* Sign Up Header */}
        <h1 className="text-xl font-bold text-center mb-6 bg-gradient-to-bl from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
          Sign Up
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6D2E]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6D2E]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6D2E]"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white font-semibold py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="mt-4 text-center text-gray-600">
          Already have an account? 
          <button className="text-[#E83D65] ml-2 underline" onClick={() => navigate("/signin/")}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
