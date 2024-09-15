import React, { useState } from 'react';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center fixed w-full top-0 left-0 z-20">
      <h1 className="text-2xl font-bold text-white">Flight Booking</h1>

      {/* Navigation Links Centered */}
      <nav className="flex-grow flex justify-center space-x-8 text-white">
        <a href="#terms" className="hover:text-gray-200">Terms & Conditions</a>
        <a href="#faq" className="hover:text-gray-200">FAQ</a>
        <a href="#feedback" className="hover:text-gray-200">Feedback</a>
        <a href="#contact" className="hover:text-gray-200">Contact</a>
      </nav>

      {/* Profile Icon on the Right */}
      <div className="relative">
        <button
          className="bg-gray-300 p-2 rounded-full focus:outline-none"
          onClick={handleDropdownToggle}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9 5-9 5-9-5 9-5z"
            ></path>
          </svg>
        </button>

        {/* Dropdown for Profile Options */}
        <div
          className={`absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-lg w-40 ${dropdownOpen ? 'block' : 'hidden'}`}
        >
          <a href="/history" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Booking History</a>
          <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
