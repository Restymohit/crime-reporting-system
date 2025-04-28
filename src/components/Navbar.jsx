import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Crime Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
