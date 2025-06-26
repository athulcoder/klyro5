import TopNavigationBar from "@/components/TopNavigation";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blue-500">
      <body className="bg-cyan-700">
        <TopNavigationBar />
        {/* <SideNavigation /> */}

        <div className="w-full h-screen bg-cyan-700">{children}</div>
      </body>
    </html>
  );
}
