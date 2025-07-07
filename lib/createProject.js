import { Project } from "@/models/project.model";
import { connectDB } from "./db";

export async function createProject(formData, clientId) {
  let isCreated = false;
  try {
    await connectDB();

    const {
      companyName,
      companyAddress,
      companyEmail,
      companyDescription,
      instagramLink,
      githubLink,
      facebookLink,
      xappLink,
      linkedinLink,
      domainName,
      pagesRequired,
      websiteStyle,
      uploadNotes,
      fileUrls,
    } = formData;

    const newProject = await new Project({
      clientId,
      companyName,
      companyAddress,
      companyEmail,
      companyDescription,
      instagramLink,
      githubLink,
      facebookLink,
      xappLink,
      linkedinLink,
      domainName,
      pagesRequired,
      websiteStyle,
      uploadNotes,
      fileUrls,
    });

    await newProject.save();
    isCreated = true;
  } catch (error) {
    console.log("project validation ERROR: ", error);
    isCreated = false;
  }

  return isCreated;
}
