import React from 'react';

const UserHistory = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Booking History</h2>
      <ul>
        <li>Flight to New York - 12/12/2024 - <button className="text-red-500">Cancel</button></li>
        <li>Flight to Los Angeles - 01/01/2025 - <button className="text-red-500">Cancel</button></li>
      </ul>
    </div>
  );
}

export default UserHistory;
