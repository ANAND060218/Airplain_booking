// WelcomePage.js
import React from 'react';
import NavBar from './NavBar';

const WelcomePage = () => {
  return (
    <>
      <NavBar />
      <div id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/air.jpeg)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Flight Booking</h1>
            <p className="mt-4 text-lg">Book your flights with ease!</p>
          </div>
        </div>
      </div>
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">Here is some information about our flight booking service...</p>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Feel free to reach out to us...</p>
        </div>
      </section>
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Flight Booking. All rights reserved.</p>
      </footer>
    </>
  );
}

export default WelcomePage;
