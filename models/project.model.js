import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({}, { timestamps: true });

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
