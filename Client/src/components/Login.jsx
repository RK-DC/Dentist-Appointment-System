import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password
      });
      
      setMessage(response.data.message);
      setIsSuccess(true)
    } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
      setMessage('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Welcome to Dentist Appointment System
        </h1>
        <p className="text-lg text-center mb-8 text-gray-500">
          Please log in to manage your appointments.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              className="border border-gray-300 p-3 rounded w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="border border-gray-300 p-3 rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700"
          >
            Login
          </button>

         
          {message && (
            <p className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
            )}
        </form>
      </div>
    </div>
  );
};

export default Login;
