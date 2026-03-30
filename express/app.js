const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("Server is running");
});

// Error Handler (always last)
app.use(errorHandler);

// Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});