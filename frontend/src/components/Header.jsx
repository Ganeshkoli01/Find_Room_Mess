// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png';  // Importing logo from assets

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Find Room & Mess Logo" className="h-12 w-auto" />
        <h1 className="ml-2 text-2xl font-semibold">Find Room & Mess System</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-300">Home</a></li>
          <li><a href="/search" className="hover:text-yellow-300">Search</a></li>
          <li><a href="/login" className="hover:text-yellow-300">Login</a></li>
          <li><a href="/signup" className="hover:text-yellow-300">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
