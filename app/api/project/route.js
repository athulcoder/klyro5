import { NextResponse } from "next/server";

export async function POST(req) {
  const projectDetails = req.json();

  if (!projectDetails)
    return NextResponse.json({
      success: false,
      message: "Project details are empty",
    });
}
