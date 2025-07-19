// src/services/roomService.js
const API_URL = '/api/rooms';

export const getAllRooms = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch rooms');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const getRoomById = async (roomId) => {
  try {
    const response = await fetch(`${API_URL}/${roomId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch room details');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const createRoom = async (roomData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(roomData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create room');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};
