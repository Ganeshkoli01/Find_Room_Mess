// src/components/RoomCard.jsx
import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={room.imageUrl} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl">{room.name}</h3>
        <p className="text-gray-500">{room.description}</p>
        <p className="font-semibold text-lg mt-2">${room.price} / month</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  );
};

export default RoomCard;
