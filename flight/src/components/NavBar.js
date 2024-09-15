// NavBar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
  return (
    
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full z-50">
      
    
      <div className="flex justify-between items-center">
        <div>
        <h1 className="text-2xl font-bold text-white">Flight Booking</h1>
          <ScrollLink to="home" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">About</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">Contact</ScrollLink>
        </div>
        <div>
          <RouterLink to="/login" className="text-white mx-4">Login</RouterLink>
          <RouterLink to="/Signup" className="text-white mx-4">Signup</RouterLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
