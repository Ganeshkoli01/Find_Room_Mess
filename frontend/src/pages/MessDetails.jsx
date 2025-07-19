// src/pages/MessDetails.jsx
import React from 'react';

const MessDetails = ({ match }) => {
  const messId = match.params.id; // Get mess id from URL
  // Fetch mess details based on messId
  const mess = { name: 'Mess 1', description: 'Delicious meals provided daily.', price: 100, imageUrl: 'mess1.jpg' };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">{mess.name}</h2>
      <img src={mess.imageUrl} alt={mess.name} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4">{mess.description}</p>
      <p className="font-semibold text-lg mt-2">${mess.price} / meal</p>
    </div>
  );
};

export default MessDetails;
