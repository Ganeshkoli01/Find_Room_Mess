// messRoutes.js - Mess-related Routes (CRUD)

const express = require('express');
const router = express.Router();
const messController = require('../controllers/messController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all messes
router.get('/', messController.getAllMesses);

// Get a single mess by ID
router.get('/:id', messController.getMessById);

// Create a new mess (protected route for admins)
router.post('/', authMiddleware.isAdmin, messController.createMess);

// Update mess details (protected route for admins)
router.put('/:id', authMiddleware.isAdmin, messController.updateMess);

// Delete a mess (protected route for admins)
router.delete('/:id', authMiddleware.isAdmin, messController.deleteMess);

// Export the router
module.exports = router;
