import { connectDB } from "@/lib/db";
import { Client } from "@/models/client.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, phone, email } = await req.json();

  if (!fullName || !phone || !email) {
    return NextResponse.json({
      success: false,
      message: "All Fields are required ",
    });
  }

  try {
    await connectDB();

    const newClient = await new Client({ fullName, phone, email });
    await newClient.save();

    return NextResponse.json({
      success: true,
      message: "Client added successfully",
    });
  } catch (error) {}
}
