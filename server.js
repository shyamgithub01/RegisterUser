// server.js or app.js

import express from 'express';
import { connectdb } from './db/db.js';
import authRoutes from './route/route.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
connectdb()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database not connected', error);
  });

// Use the routes from route.js
app.use('/', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message); // Log the error message
  res.status(err.status || 500).json({ message: err.message });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serving at port: ${port}`);
});
