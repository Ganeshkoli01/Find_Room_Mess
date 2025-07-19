// authMiddleware.js - Middleware to protect routes with JWT authentication

const jwt = require('jsonwebtoken');
const User = require('../models/User');  // User model for finding users in the DB

// Secret key used for signing JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware function to verify if a user is authenticated (has valid JWT token)
const isAuthenticated = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed! No token provided.' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Find the user by the ID stored in the token
        const user = await User.findById(decoded.userId);
        
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed! User not found.' });
        }

        // Attach the user to the request object so it's accessible in controllers
        req.user = user;
        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
};

// Middleware function to verify if the user is an admin
const isAdmin = (req, res, next) => {
    // Ensure the user is authenticated first
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required.' });
    }

    // Check if the user has an admin role
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access forbidden: Admins only.' });
    }

    next();  // Proceed to the next middleware or route handler
};

// Exporting the middleware functions
module.exports = {
    isAuthenticated,
    isAdmin,
};
