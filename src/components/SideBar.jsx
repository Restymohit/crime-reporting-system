import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-full w-64 p-4">
      <ul>
        <li><Link to="/" className="block p-2 hover:bg-gray-400">Home</Link></li>
        <li><Link to="/add-report" className="block p-2 hover:bg-gray-400">Add Report</Link></li>
        <li><Link to="/dashboard" className="block p-2 hover:bg-gray-400">Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
