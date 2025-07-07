import { connectDB } from "@/lib/db";
import { verifyClient } from "@/lib/verifyClient";
import { Client } from "@/models/client.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();

  console.log(formData.fullName, formData.email, formData.phone);
  if (!formData.fullName || !formData.phone || !formData.email) {
    return NextResponse.json({
      success: false,
      message: "All fields are required",
    });
  }

  // first we create the client and then we add the project with the client id that is the ObjectId

  const res = await verifyClient(
    formData.fullName,
    formData.phone,
    formData.email
  );

  if (
    !formData.companyName ||
    !formData.companyDescription ||
    !formData.companyEmail ||
    !formData.companyAddress ||
    !formData.instagramLink ||
    !formData.pagesRequired
  ) {
    return NextResponse.json({
      succes: false,
      messaage: "Some fields are requried",
    });
  }

  console.log(formData);
  if (res)
    return NextResponse.json({ succes: true, message: "Client Created" });
}
