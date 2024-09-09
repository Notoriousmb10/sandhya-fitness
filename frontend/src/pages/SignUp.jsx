import React, { useState } from 'react';
import loginimg from "../assets/loginimg1.jpg";
import axios from 'axios';
import Navbar from '../components/Home/NavbarTwo';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/user/', 
        { email, firstname, lastname, age },
        { withCredentials: true }
      );
      if (response && response.data) {
        setIsOtpSent(true);
        alert(response.data.message); 
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Sign-up error:', error.response.data);
        alert(error.response.data.message || 'Something went wrong!');
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error('Sign-up error:', error.request);
        alert('No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Sign-up error:', error.message);
        alert('Something went wrong!');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:5000/user/verify', { otp },
        { withCredentials: true }
      );
      alert('Sign-up successful!');
      localStorage.setItem('userInfo', JSON.stringify(data));
      window.location.href = '/';
    } catch (error) {
      alert(error.response.data.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar /> 
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          backgroundImage: `url(${loginimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="p-8 max-w-md w-full border-2 border-black bg-white shadow-lg rounded-md">
          {loading ? (
            <div className="flex justify-center">
              <svg className="animate-spin h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
              <div className="border-t border-gray-200 my-4"></div>

              
              <label className="block text-gray-700">First Name</label>
              <input 
                placeholder="First Name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <label className="block text-gray-700">Last Name</label>
              <input 
                placeholder="Last Name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />

              
              <label className="block text-gray-700">Age</label>
              <input 
                placeholder="Age"
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

           
              <label className="block text-gray-700">Email</label>
              <input 
                placeholder="name@company.com"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md mt-4" onClick={handleSignUp}>
                Verify 
              </button>

              {isOtpSent && (
                <>
                  <label className="block text-gray-700">OTP</label>
                  <input 
                    placeholder="OTP" 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md mt-4" onClick={handleVerifySignUp}>
                    Sign Up
                  </button>
                </>
              )}
              <div className="flex justify-between w-full">
                <p className="text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-500">Log In</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
