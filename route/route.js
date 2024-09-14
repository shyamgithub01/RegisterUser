import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';  // Import bcrypt
import { User } from "../model/user.models.js";  // Adjust the path to your user model

const router = express.Router();

// Setting up __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route for serving the registration page
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../route/index.html'));  // Ensure the path is correct
});

// Route for handling user registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send("Username already taken");
        }

        // Hash the password before saving
       
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ username, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();
        res.status(200).send("User successfully registered");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error registering user: " + error.message);
    }
});

// Route for serving the login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../route/login.html'));  // Ensure the path is correct
});

// Route for handling user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send("User not found");
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }

        res.status(200).send("Login successful");
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send("Error logging in user: " + error.message);
    }
});

export default router;
