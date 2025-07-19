// src/pages/RoomList.jsx
import React from 'react';
import RoomCard from '../components/RoomCard';

const RoomList = () => {
  const rooms = [
    { name: 'Room 1', description: 'Spacious and bright room.', price: 500, imageUrl: 'room1.jpg' },
    { name: 'Room 2', description: 'Cozy and comfortable room.', price: 450, imageUrl: 'room2.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
