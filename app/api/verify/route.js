import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, phone, email } = await req.json();

  if (!fullName || !phone || !email) {
    return NextResponse.json({
      success: false,
      message: "All Fields are required ",
    });
  }
}
