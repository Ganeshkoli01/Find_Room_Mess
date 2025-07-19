// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-4xl font-semibold">404 - Page Not Found</h2>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
