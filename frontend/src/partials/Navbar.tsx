import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-indigo-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="frontend\public\Press Start 2P.png" alt="Logo" className="h-10" />
        </div>

        {/* Menu */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
