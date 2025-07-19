// Review.js - Review Schema

const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: false,  // Optional, if review is for a room
    },
    messId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mess',
      required: false,  // Optional, if review is for a mess
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create and export the Review model
module.exports = mongoose.model('Review', reviewSchema);
