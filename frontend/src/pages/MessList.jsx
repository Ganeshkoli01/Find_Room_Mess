// src/pages/MessList.jsx
import React from 'react';
import MessCard from '../components/MessCard';

const MessList = () => {
  const messes = [
    { name: 'Mess 1', description: 'Delicious meals provided daily.', price: 100, imageUrl: 'mess1.jpg' },
    { name: 'Mess 2', description: 'Healthy and nutritious food.', price: 120, imageUrl: 'mess2.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Messes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {messes.map((mess, index) => (
          <MessCard key={index} mess={mess} />
        ))}
      </div>
    </div>
  );
};

export default MessList;
