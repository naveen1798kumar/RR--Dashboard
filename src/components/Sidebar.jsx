import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHistory, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/history" className="flex items-center space-x-2">
            <FaHistory />
            <span>Appointment History</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
