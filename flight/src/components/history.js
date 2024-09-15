import React, { useState, useEffect } from 'react';

const UserHistory = () => {
  const [history, setHistory] = useState([]);

  // Fetch user history from an API or use dummy data
  useEffect(() => {
    // Example API call (Replace with your actual API endpoint)
    // fetch('/api/user-history')
    //   .then(response => response.json())
    //   .then(data => setHistory(data))
    //   .catch(error => console.error('Error fetching user history:', error));

    // Dummy data for illustration
    setHistory([
      { date: '2024-09-10', action: 'Flight booked', details: 'Flight 1' },
      { date: '2024-09-12', action: 'Filter applied', details: 'Airline A' },
      { date: '2024-09-15', action: 'User logged in', details: '' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">User History</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {history.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserHistory;
