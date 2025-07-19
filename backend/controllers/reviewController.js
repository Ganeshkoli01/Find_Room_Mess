// reviewController.js - Review Logic

const Review = require('../models/Review');  // Assuming there's a Review model

// Add a new review
const addReview = async (req, res) => {
  const { userId, roomId, messId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      userId,
      roomId,
      messId,
      rating,
      comment,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId roomId messId');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  addReview,
  getAllReviews,
};
