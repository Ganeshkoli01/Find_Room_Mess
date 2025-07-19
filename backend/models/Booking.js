// Booking.js - Booking Schema

const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    messId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mess',
      required: false,  // Optional for room bookings
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['booked', 'completed', 'cancelled'],
      default: 'booked',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create and export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
