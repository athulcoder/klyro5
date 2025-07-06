import { connectDB } from "@/lib/db";
import { verifyClient } from "@/lib/verifyClient";
import { Client } from "@/models/client.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, phone, email } = await req.json();

  if (!fullName || !phone || !email) {
    return NextResponse.json({
      success: false,
      message: "All fields are required",
    });
  }
  const res = verifyClient({ fullName, phone, email });

  return res;
}
