
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Signup from './components/SignupPage';
import History from './components/history';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import BookingConfirmation from './components/BookingConfirmation';
import UserHistory from './components/UserHistory';
// index.js or App.js
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/History" element={<History />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/user-history" element={<UserHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
