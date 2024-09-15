import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Ensure react-icons is installed

const NavBar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#manage-flights" className="bg-blue-500 px-4 py-2 rounded">Manage Flights</a>
        <a href="#guidelines" className="bg-blue-500 px-4 py-2 rounded">Guidelines</a>
        <a href="#user-feedback" className="bg-blue-500 px-4 py-2 rounded">User Feedback</a>

        <div className="relative group">
          {/* User Icon */}
          <FaUserCircle className="text-3xl cursor-pointer" />

          {/* Dropdown Menu (on hover) */}
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
            <a href="#book-history" className="block px-4 py-2 hover:bg-gray-200">Book History</a>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
