// src/pages/Search.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Here, you would add your search logic, probably filtering from a list of rooms or messes.
    setSearchResults([]); // Set results after search logic
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Search for Rooms/Messes</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Search Results</h3>
        {/* Display search results here */}
      </div>
    </div>
  );
};

export default Search;
