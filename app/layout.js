import TopNavigationBar from "@/components/TopNavigation";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import { Hamburger } from "lucide-react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="bg-cyan-700 ">
        <TopNavigationBar />

        <div className="w-full h-screen bg-cyan-700  ">{children}</div>
      </body>
    </html>
  );
}
