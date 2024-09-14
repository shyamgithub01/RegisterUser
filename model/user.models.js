import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true  // Ensure username is unique
    },
    password: {
        type: String,
        required: true
    }
});

export const User = mongoose.model("User" , userSchema)