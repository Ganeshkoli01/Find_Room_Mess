// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query); // Trigger search callback with the query
    }
  };

  return (
    <div className="flex items-center border border-gray-300 p-2 rounded">
      <input
        type="text"
        className="flex-1 p-2 text-gray-700 border-r"
        placeholder="Search for rooms or mess"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
