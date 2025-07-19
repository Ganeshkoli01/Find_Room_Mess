// src/components/MessCard.jsx
import React from 'react';

const MessCard = ({ mess }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={mess.imageUrl} alt={mess.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl">{mess.name}</h3>
        <p className="text-gray-500">{mess.description}</p>
        <p className="font-semibold text-lg mt-2">${mess.price} / meal</p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  );
};

export default MessCard;
