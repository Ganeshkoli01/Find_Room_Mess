// bookingController.js - Booking Management Logic

const Booking = require('../models/Booking');  // Assuming there's a Booking model

// Create a new booking
const createBooking = async (req, res) => {
  const { roomId, userId, bookingDate, duration, totalAmount } = req.body;

  try {
    const newBooking = new Booking({
      roomId,
      userId,
      bookingDate,
      duration,
      totalAmount,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('roomId userId');
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  createBooking,
  getAllBookings,
};
