import express from "express";
import { connectdb } from "./db/db.js";
import authRoutes from "./route/route.js"; // Renamed for clarity

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
connectdb()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database not connected", error);
  });

// Use the routes from route.js
app.use('/', authRoutes);  // Use the router, not the app

const port = 3000;
app.listen(port, () => {
  console.log(`Serving at port: ${port}`);
});
