// app/sitemap.xml/route.ts
import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://klyro5.vercel.app"; // ✅ Replace with your real domain

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/works",
    "/services",
  ];

  const pages = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // You can add dynamic routes from DB, CMS, or API here too
  // Example:
  // const projects = await fetchDataFromMongoOrFile()
  // const dynamicPages = projects.map(p => ({
  //   url: `${baseUrl}/works/${p.slug}`,
  //   lastModified: p.updatedAt
  // }));

  return pages;
}
