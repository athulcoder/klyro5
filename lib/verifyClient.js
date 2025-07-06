import React from "react";

export async function verifyClient(client) {
  let isVerified = false;

  try {
    await connectDB();

    const newClient = await new Client({ fullName, phone, email });
    await newClient.save();
    isVerified = true;
  } catch (error) {
    isVerified = false;
  }

  return isVerified;
}
