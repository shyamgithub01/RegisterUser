import mongoose from "mongoose";

async function connectdb() {
  try {
    await mongoose.connect("mongodb+srv://shyamsirodariya100:12345@cluster0.nkjms.mongodb.net/", {
      
    });
    
  } catch (error) {
    console.log("Database not connected", error);
  }
}

export { connectdb };
