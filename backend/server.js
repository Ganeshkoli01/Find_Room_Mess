const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const messRoutes = require('./routes/messRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Error Handler
const { errorHandler } = require('./utils/errorHandler');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // HTTP request logging

app.use(express.json()); // Parse JSON request bodies

// Route Handlers
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/messes', messRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

// Default Route (Health Check)
app.get('/', (req, res) => {
    res.send('Welcome to the Find Room Mess System API');
});

// Error handling middleware (must be the last middleware)
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection failed:', err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
