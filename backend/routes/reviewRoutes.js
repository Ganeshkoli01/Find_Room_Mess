// reviewRoutes.js - Review Routes

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all reviews for a specific room
router.get('/room/:roomId', reviewController.getRoomReviews);

// Get all reviews for a specific mess
router.get('/mess/:messId', reviewController.getMessReviews);

// Create a new review
router.post('/', authMiddleware.isAuthenticated, reviewController.createReview);

// Update a review (only for the user who created the review)
router.put('/:id', authMiddleware.isAuthenticated, reviewController.updateReview);

// Delete a review (only for the user who created the review or an admin)
router.delete('/:id', authMiddleware.isAuthenticated, reviewController.deleteReview);

// Export the router
module.exports = router;
