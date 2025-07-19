// roomController.js - Room CRUD Operations

const Room = require('../models/Room');  // Assuming there's a Room model for room data

// Create a new room
const createRoom = async (req, res) => {
  const { name, description, price, location, image } = req.body;

  try {
    const newRoom = new Room({
      name,
      description,
      price,
      location,
      image,
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get a single room by ID
const getRoomById = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }

    res.json(room);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update room details
const updateRoom = async (req, res) => {
  const { roomId } = req.params;
  const { name, description, price, location, image } = req.body;

  try {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, {
      name,
      description,
      price,
      location,
      image,
    }, { new: true });

    if (!updatedRoom) {
      return res.status(404).json({ msg: 'Room not found' });
    }

    res.json(updatedRoom);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a room
const deleteRoom = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findByIdAndDelete(roomId);
    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }

    res.json({ msg: 'Room deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
};
