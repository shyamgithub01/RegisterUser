# Tic-Tac-Toe Game with User Authentication

This project is a Tic-Tac-Toe game combined with a user authentication system (register and login) using **Node.js**, **Express**, **MongoDB**, and **Mongoose** for backend functionality. Additionally, **HTML**, **CSS**, and **JavaScript** are used for the frontend interface.

## Features

1. **User Registration**: Allows users to register with a unique username and password. Passwords are securely hashed using **bcrypt**.
2. **User Login**: Users can log in to their account by entering their username and password.
3. **Tic-Tac-Toe Game**: A simple game of Tic-Tac-Toe is available to logged-in users.
4. **Password Hashing**: Passwords are securely hashed using **bcrypt** before being stored in the database.
5. **MongoDB Integration**: User details are stored in a MongoDB database using **Mongoose**.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (for client-side interaction and game logic)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object data modeling)
  - bcrypt (for password hashing)

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or above)
- **npm** (Node Package Manager)
- **MongoDB** (or a MongoDB Atlas cluster for a cloud-hosted database)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/tic-tac-toe-auth.git
   cd tic-tac-toe-auth
