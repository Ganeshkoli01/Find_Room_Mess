// reviewController.js - Review Logic

const Review = require('../models/Review');  // Assuming there's a Review model

// Get reviews for a specific room
const getRoomReviews = async (req, res) => {
  const { roomId } = req.params;

  try {
    const reviews = await Review.find({ roomId }).populate('userId');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get reviews for a specific mess
const getMessReviews = async (req, res) => {
  const { messId } = req.params;

  try {
    const reviews = await Review.find({ messId }).populate('userId');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create a new review
const createReview = async (req, res) => {
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

// Update a review
const updateReview = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const review = await Review.findByIdAndUpdate(id, updates, { new: true });
    if (!review) {
      return res.status(404).json({ msg: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      return res.status(404).json({ msg: 'Review not found' });
    }
    res.json({ msg: 'Review deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  getRoomReviews,
  getMessReviews,
  createReview,
  updateReview,
  deleteReview,
};
