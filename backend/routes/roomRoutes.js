// roomRoutes.js - Room-related Routes (CRUD)

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all rooms
router.get('/', roomController.getAllRooms);

// Get a single room by ID
router.get('/:id', roomController.getRoomById);

// Create a new room (protected route for admins)
router.post('/', authMiddleware.isAdmin, roomController.createRoom);

// Update room details (protected route for admins)
router.put('/:id', authMiddleware.isAdmin, roomController.updateRoom);

// Delete a room (protected route for admins)
router.delete('/:id', authMiddleware.isAdmin, roomController.deleteRoom);

// Export the router
module.exports = router;
