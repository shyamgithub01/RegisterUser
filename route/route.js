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
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const newUser = new User({ username, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();
        res.status(200).send("User Successfully Registered");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error registering user: " + error.message);
    }
});

export default router;
