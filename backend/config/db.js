// db.js - MongoDB Connection Configuration

const mongoose = require('mongoose');

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/find-room-mess-system';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure code
  }
};

module.exports = connectDB;
