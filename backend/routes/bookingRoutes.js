// bookingRoutes.js - Booking Routes

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all bookings (admin route)
router.get('/', authMiddleware.isAdmin, bookingController.getAllBookings);

// Get bookings for a specific user
router.get('/user/:userId', authMiddleware.isAuthenticated, bookingController.getUserBookings);

// Create a new booking
router.post('/', authMiddleware.isAuthenticated, bookingController.createBooking);

// Update a booking (only for the user who created the booking)
router.put('/:id', authMiddleware.isAuthenticated, bookingController.updateBooking);

// Delete a booking (only for the user who created the booking or an admin)
router.delete('/:id', authMiddleware.isAuthenticated, bookingController.deleteBooking);

// Export the router
module.exports = router;
