// errorHandler.js - A utility to handle errors across the application

// Custom error class to handle different error types
class AppError extends Error {
          constructor(message, statusCode) {
              super(message);  // Set the error message
              this.statusCode = statusCode || 500;  // Set the HTTP status code (default: 500)
              this.isOperational = true;  // Mark the error as operational
              Error.captureStackTrace(this, this.constructor);  // Capture stack trace for debugging
          }
      }
      
      // Generic error handling middleware
      const errorHandler = (err, req, res, next) => {
          // Check if the error is operational or not
          if (err.isOperational) {
              return res.status(err.statusCode).json({
                  status: 'error',
                  message: err.message,
              });
          }
      
          // For unhandled errors, send a generic message and log the error
          console.error('ERROR: ', err);
      
          return res.status(500).json({
              status: 'error',
              message: 'Something went wrong! Please try again later.',
          });
      };
      
      // Utility function to create an application error with a specific status code
      const createAppError = (message, statusCode) => {
          return new AppError(message, statusCode);
      };
      
      // Export the error handler and utility function
      module.exports = {
          errorHandler,
          createAppError,
      };
      