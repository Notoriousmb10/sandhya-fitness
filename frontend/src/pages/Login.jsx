import React, { useState } from 'react';
import loginimg from "../assets/loginimg1.jpg";
import axios from 'axios';
import Navbar from '../components/Home/NavbarTwo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/user/login', { email },
        { withCredentials: true }
      );
      if (response && response.data) {
        setIsOtpSent(true);
        alert(response.data.message); 
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message 
        ? error.response.data.message 
        : 'Something went wrong!';
      alert(errorMessage);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:5000/user/verify-login', { otp },
        { withCredentials: true }
      );
      alert('Login successful!');
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
              <h1 className="text-2xl font-bold mb-4">Log in</h1>
              <div className="border-t border-gray-200 my-4"></div>
              <label className="block text-gray-700">Email</label>
              <input 
                placeholder="name@company.com"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md mt-4" onClick={handleLogin}>
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
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md mt-4" onClick={handleVerifyLogin}>
                    Log In
                  </button>
                </>
              )}
              <div className="flex justify-between w-full">
                <p className="text-sm">
                  Don’t have an account?{' '}
                  <a href="/signup" className="text-blue-500">Sign Up</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
