import React, { useState } from 'react';
import NavBar from './navadmin'; // Importing the NavBar component

const AdminDashboard = () => {
  const [results, setResults] = useState([]);

  // Handle the admin form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResults([]); // Process form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="pt-24 px-4 lg:px-8">
        {/* Manage Flights Section with background image */}
        <section
          id="manage-flights"
          className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/air.jpeg')` }} // Replace with your image path
        >
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg w-full max-w-sm"> {/* Adjusted to a smaller width */}
              <h2 className="text-3xl font-bold mb-6 text-left text-white">Manage Flights</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Flight Number"
                  className="border p-3 w-full rounded bg-white text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Origin"
                  className="border p-3 w-full rounded bg-white text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Destination"
                  className="border p-3 w-full rounded bg-white text-lg"
                  required
                />
                <input
                  type="date"
                  className="border p-3 w-full rounded bg-white text-lg"
                  required
                />
                <input
                  type="time"
                  className="border p-3 w-full rounded bg-white text-lg"
                  required
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-3 rounded-lg text-lg w-full">
                  Submit Flight Details
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section id="guidelines" className="min-h-screen bg-gray-200 p-8">
          <h2 className="text-3xl font-bold mb-4">Guidelines</h2>
          <p className="text-lg">Admin guidelines will go here. Include operational procedures, best practices, etc.</p>
        </section>

        {/* User Feedback Section */}
        <section id="user-feedback" className="min-h-screen bg-white p-8">
          <h2 className="text-3xl font-bold mb-4">User Feedback Received</h2>
          <p className="text-lg">User feedback received from various customers will be displayed here for review.</p>
        </section>

        {/* Book History Section */}
        <section id="book-history" className="min-h-screen bg-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-4">Book History</h2>
          <p className="text-lg">This section will display the admin's book history or past managed flights.</p>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
