import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { User } from "../model/user.models.js"; // Adjust the path to your user model

const router = express.Router();

// Setting up __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route for serving the registration page
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Route for handling user registration
router.post('/register', async (req, res) => {
     const { username, password } = req.body;
     const newUser = new User({ username, password });

    try {
        await newUser.save();
        res.status(200).send("User Successfully Registered");
       
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error registering user: " + error.message);
    }
});

export default router;
