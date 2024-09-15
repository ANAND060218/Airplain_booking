import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic for authentication if needed
    if (isAdmin) {
      navigate('/admin-dashboard'); // Redirect to Admin Dashboard
    } else {
      navigate('/user-dashboard'); // Redirect to User Dashboard
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <button
          onClick={() => setIsAdmin(false)}
          className={`px-4 py-2 rounded ${!isAdmin ? 'bg-blue-500' : 'bg-blue-700'} text-white`}
        >
          Login as User
        </button>
        <button
          onClick={() => setIsAdmin(true)}
          className={`px-4 py-2 rounded ${isAdmin ? 'bg-blue-500' : 'bg-blue-700'} text-white ml-4`}
        >
          Login as Admin
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded"
        >
          {isAdmin ? 'Login as Admin' : 'Login as User'}
        </button>
      </form>
    </div>
  );
};

export default Login;
