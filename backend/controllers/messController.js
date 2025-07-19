// messController.js - Mess CRUD Operations

const Mess = require('../models/Mess');  // Assuming there's a Mess model for mess data

// Create a new mess
const createMess = async (req, res) => {
  const { name, description, price, location, image } = req.body;

  try {
    const newMess = new Mess({
      name,
      description,
      price,
      location,
      image,
    });

    await newMess.save();
    res.status(201).json(newMess);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all messes
const getAllMesses = async (req, res) => {
  try {
    const messes = await Mess.find();
    res.json(messes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get a single mess by ID
const getMessById = async (req, res) => {
  const { messId } = req.params;

  try {
    const mess = await Mess.findById(messId);
    if (!mess) {
      return res.status(404).json({ msg: 'Mess not found' });
    }

    res.json(mess);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update mess details
const updateMess = async (req, res) => {
  const { messId } = req.params;
  const { name, description, price, location, image } = req.body;

  try {
    const updatedMess = await Mess.findByIdAndUpdate(messId, {
      name,
      description,
      price,
      location,
      image,
    }, { new: true });

    if (!updatedMess) {
      return res.status(404).json({ msg: 'Mess not found' });
    }

    res.json(updatedMess);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a mess
const deleteMess = async (req, res) => {
  const { messId } = req.params;

  try {
    const mess = await Mess.findByIdAndDelete(messId);
    if (!mess) {
      return res.status(404).json({ msg: 'Mess not found' });
    }

    res.json({ msg: 'Mess deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  createMess,
  getAllMesses,
  getMessById,
  updateMess,
  deleteMess,
};
