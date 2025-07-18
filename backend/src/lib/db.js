import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoBD connection established ${conn.connection.host}`);
  } catch (err) {
    console.log("mongodb connection error", err);
  }
};