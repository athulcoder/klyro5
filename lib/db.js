import mongoose from "mongoose";

const DB_NAME = process.env.DB_NAME;

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}\${DB_NAME}`
    );

    console.log("MONGO DB conneted to ", conn.connection.host);
  } catch (error) {
    console.log("ERROR MONGODB : ", error);
  }
}
