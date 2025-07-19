// src/pages/Home.jsx
import React from 'react';
import RoomCard from '../components/RoomCard';
import MessCard from '../components/MessCard';

const Home = () => {
  const featuredRooms = [
    { name: 'Room 1', description: 'Spacious and bright room.', price: 500, imageUrl: 'room1.jpg' },
    { name: 'Room 2', description: 'Cozy and comfortable room.', price: 450, imageUrl: 'room2.jpg' },
  ];

  const featuredMesses = [
    { name: 'Mess 1', description: 'Delicious meals provided daily.', price: 100, imageUrl: 'mess1.jpg' },
    { name: 'Mess 2', description: 'Healthy and nutritious food.', price: 120, imageUrl: 'mess2.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Featured Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {featuredRooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Featured Messes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {featuredMesses.map((mess, index) => (
          <MessCard key={index} mess={mess} />
        ))}
      </div>
    </div>
  );
};

export default Home;
