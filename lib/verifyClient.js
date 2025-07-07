import { Client } from "@/models/client.model";
import React from "react";
import { connectDB } from "./db";

export async function verifyClient(fullName, email, phone) {
  let isVerified = false;

  try {
    await connectDB();

    const newClient = await new Client({ fullName, phone, email });
    await newClient.save();
    isVerified = true;

    if (isVerified) return newClient._id;
  } catch (error) {
    isVerified = false;
    console.log(error);
  }
}
