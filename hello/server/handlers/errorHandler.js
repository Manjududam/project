// Define errorHandler middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Default status code and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
  }

  // Send error response
  res.status(statusCode).json({ error: message });
};

// Route for Signup
export const signup = async (req, res, next) => {
  try {
    // Your existing signup logic
  } catch (error) {
    next(error); // Pass error to errorHandler middleware
  }
};

// Login Route
export const login = async (req, res, next) => {
  try {
    // Your existing login logic
  } catch (error) {
    next(error); // Pass error to errorHandler middleware
  }
};
