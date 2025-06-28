import TopNavigationBar from "@/components/TopNavigation";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import { Hamburger } from "lucide-react";
export const metadata = {
  title: "Klyro5 | High-Performance Web & Digital Solutions",
  description:
    "Klyro5 is your partner in building stunning websites and digital platforms. We deliver custom development, UI/UX design, SEO, and performance-driven experiences that elevate your brand online.",
  keywords: [
    "Klyro5",
    "web development agency",
    "custom websites",
    "UI UX design",
    "Next.js agency",
    "eCommerce development",
    "React agency",
    "SEO optimization",
    "website performance",
    "digital solutions",
    "web app development",
    "India web agency",
    "modern website design",
  ],
  authors: [{ name: "Klyro5" }],
  creator: "Klyro5",
  publisher: "Klyro5",
  applicationName: "Klyro5",
  generator: "Next.js",
  metadataBase: new URL("https://klyro5.vercel.app"), // Change to your actual domain
  alternates: {
    canonical: "https://klyro5.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900">
      <body className="bg-cyan-700 ">
        <TopNavigationBar />

        <div className="w-full h-screen bg-cyan-700  ">{children}</div>
      </body>
    </html>
  );
}
