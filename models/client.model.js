import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: stringify, required: true },
  },
  { timestamps: true }
);

export const Client =
  mongoose.models.Client || mongoose.model("Client", clientSchema);
