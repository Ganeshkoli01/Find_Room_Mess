// authRoutes.js - Authentication Routes

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User Signup Route
router.post('/signup', authController.signup);

// User Login Route
router.post('/login', authController.login);

// Export the router
module.exports = router;
