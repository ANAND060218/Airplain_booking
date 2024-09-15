import React, { useState } from 'react';
import NavBar from './nav'; // Ensure correct import path for NavBar

const UserDashboard = () => {
  const [results, setResults] = useState([
    { flight: 'Flight 1', price: 100, time: '10:00 AM', airline: 'Airline A' },
    { flight: 'Flight 2', price: 150, time: '1:00 PM', airline: 'Airline B' },
    { flight: 'Flight 3', price: 200, time: '6:00 PM', airline: 'Airline A' },
  ]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filters, setFilters] = useState({
    airline: '',
    priceRange: '',
    departureTime: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle the flight search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredResults(results); // Initially display all search results
  };

  // Handle filtering logic
  const handleFilter = () => {
    const { airline, priceRange, departureTime } = filters;

    let filtered = results;

    if (airline) {
      filtered = filtered.filter(flight => flight.airline === airline);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filtered = filtered.filter(flight => flight.price >= minPrice && flight.price <= maxPrice);
    }

    if (departureTime) {
      filtered = filtered.filter(flight => flight.time === departureTime);
    }

    setFilteredResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Sidebar for Filters */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-10`}
      >
        <div className="p-4 mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Filter Results</h3>

          <div className="space-y-4">
            {/* Airline Filter */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Airline</label>
              <select
                className="border p-4 w-full rounded"
                value={filters.airline}
                onChange={(e) => setFilters({ ...filters, airline: e.target.value })}
              >
                <option value="">All Airlines</option>
                <option value="Airline A">Airline A</option>
                <option value="Airline B">Airline B</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Price Range</label>
              <select
                className="border p-4 w-full rounded"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">Any Price</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="150-200">$150 - $200</option>
              </select>
            </div>

            {/* Departure Time Filter */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Departure Time</label>
              <select
                className="border p-4 w-full rounded"
                value={filters.departureTime}
                onChange={(e) => setFilters({ ...filters, departureTime: e.target.value })}
              >
                <option value="">Any Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>

            {/* Filter Button */}
            <button
              type="button"
              onClick={handleFilter}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg w-full mt-4"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <NavBar />

        {/* Hamburger Menu Icon */}
        <button
          className="fixed top-4 left-4 z-20 p-2 bg-gray-700 text-white rounded-full focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </div>
        </button>

        {/* Main Sections */}
        <main className="pt-16 pb-16 px-4 lg:px-8">
          {/* Search Section */}
          <section
            className="flex justify-center items-center bg-cover bg-center min-h-screen"
            style={{ backgroundImage: 'url(/air.jpeg)' }}
          >
            <div className="p-8 bg-white bg-opacity-80 mx-auto max-w-2xl mt-16 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Book for Flights</h2>
              <form onSubmit={handleSearch} className="space-y-6">
                <input
                  type="text"
                  placeholder="From"
                  className="border p-4 w-full rounded bg-transparent text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="To"
                  className="border p-4 w-full rounded bg-transparent text-lg"
                  required
                />
                <input
                  type="date"
                  className="border p-4 w-full rounded bg-transparent text-lg"
                  required
                />
                <input
                  type="time"
                  className="border p-4 w-full rounded bg-transparent text-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg w-full"
                >
                  Search Flights
                </button>
              </form>
            </div>
          </section>

          {/* Results Section */}
          {filteredResults.length > 0 && (
            <section className="mt-8 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Flight Results</h3>
              <ul>
                {filteredResults.map((result, index) => (
                  <li key={index} className="border-b last:border-b-0 py-4 flex justify-between">
                    <span>{result.flight}</span>
                    <span>${result.price}</span>
                    <span>{result.time}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Terms & Conditions Section */}
          <section id="terms" className="min-h-screen bg-gray-200 p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Terms & Conditions</h2>
            <p className="text-lg text-gray-700">
              This is where the terms and conditions will be placed. You can add the legal content and other necessary details here.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="min-h-screen bg-white p-8">
            <h2 className="text-3xl font-bold text-center mb-4">FAQ</h2>
            <div className="space-y-4">
              <details>
                <summary className="text-lg font-semibold">What is the refund policy?</summary>
                <p className="pl-4">You can refund your flight ticket up to 24 hours before departure.</p>
              </details>
              <details>
                <summary className="text-lg font-semibold">How to change flight details?</summary>
                <p className="pl-4">You can change flight details through the "Manage Booking" section on the website.</p>
              </details>
              {/* Add more FAQ items as needed */}
            </div>
          </section>

          {/* Feedback Section */}
          <section id="feedback" className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Feedback</h2>
            <p className="text-lg text-gray-700 text-center">
              We'd love to hear your feedback! Please fill out the form below.
            </p>
            <form className="max-w-lg mx-auto mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-4 w-full rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-4 w-full rounded"
                required
              />
              <textarea
                placeholder="Your Feedback"
                className="border p-4 w-full rounded h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg w-full"
              >
                Submit Feedback
              </button>
            </form>
          </section>
           {/* Contact Section */}
           <section id="contact" className="min-h-screen bg-white p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 text-center">
              For any inquiries or support, please reach out to us via the following contact details.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Email: support@example.com
            </p>
            <p className="text-lg text-gray-700 text-center">
              Phone: +123 456 7890
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
