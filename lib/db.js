import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}\${DB_NAME}`
    );
  } catch (error) {
    console.log("ERROR MONGODB : ", error);
  }
}
