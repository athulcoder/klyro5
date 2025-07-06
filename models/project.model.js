import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, lowercase: true },
    companyAdress: { type: String, required: true },
    companyDescription: { type: String, required: true },

    // Socail midea links
    instagramLink: { type: String, required: true },
    githubLink: { type: String },
    facebookLink: { type: String },
    xappLink: { type: String },
    linkedinLink: { type: String },

    //Project
    domainName: { type: String, lowercase: true },
    pagesRequired: { type: [String], required: true },
    websiteStyle: { type: String, required: true },

    // Media file
    fileUrls: { type: [String] },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
