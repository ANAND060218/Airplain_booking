import React from 'react';

const BookingConfirmation = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Booking Confirmation</h2>
      <p>Your flight has been booked!</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Go to Dashboard</button>
    </div>
  );
}

export default BookingConfirmation;
