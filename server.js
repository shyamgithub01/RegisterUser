import express from "express"
import mongoose from "mongoose"
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
app.use(express.json())

 mongoose.connect("mongodb+srv://shyamsirodariya100:12345@cluster0.nkjms.mongodb.net/",)
.then(
    ()=>{
        console.log(`Mongodb connect `)
    }
)
.catch((err) => console.log("MongoDb connection Failed"))

const userSchema = new mongoose.Schema({
    username : String,
    password : String
})

const User = mongoose.model("User" , userSchema)

// serve html file



app.get('/register' , async (req , res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    console.log("Received data:", { username, password });  // Log received data

    const newUser = new User({ username, password });

    try {
        await newUser.save();
        console.log("User saved:", newUser);  // Log saved user
        res.status(200).send("User Successfully Registered");
    } catch (error) {
        console.error("Error saving user:", error);  // Log error details
        res.status(500).send("Error registering user: " + error.message);
    }
});

const port = 3000
app.listen(port , () =>{
    console.log(`Serving at port : ${port}`)
})

