// src/pages/RoomDetails.jsx
import React from 'react';

const RoomDetails = ({ match }) => {
  const roomId = match.params.id; // Get room id from URL
  // Fetch room details based on roomId
  const room = { name: 'Room 1', description: 'Spacious and bright room.', price: 500, imageUrl: 'room1.jpg' };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">{room.name}</h2>
      <img src={room.imageUrl} alt={room.name} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4">{room.description}</p>
      <p className="font-semibold text-lg mt-2">${room.price} / month</p>
    </div>
  );
};

export default RoomDetails;
