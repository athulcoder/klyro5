import TopNavigationBar from "@/components/TopNavigation";
import "./globals.css";
// import SideNavigation from "@/components/SideNavigation";
import { Hamburger } from "lucide-react";

export const metadata = {
  title:
    "Klyro5 | High-Performance Web Development, UI/UX Design & SEO Services",
  description:
    "Klyro5 is your partner in creating cutting-edge websites and digital platforms. From design to development, we craft high-performance, user-first experiences that grow your business online.",

  keywords: [
    "Klyro5",
    "web development",
    "UI UX design",
    "Next.js website",
    "SEO services",
    "branding agency",
    "React web design",
    "digital marketing",
    "custom websites",
    "performance optimization",
    "creative studio",
    "web design Kerala",
    "full-stack development",
    "modern web design",
    "online business solutions",
    "responsive websites",
    "UX consulting",
    "website speed optimization",
    "user-first design",
    "clean development",
  ],

  metadataBase: new URL("https://klyro5.vercel.app"),
  alternates: {
    canonical: "https://klyro5.vercel.app",
  },
  applicationName: "Klyro5",
  creator: "Klyro5",
  publisher: "Klyro5",
  authors: [{ name: "Klyro5", url: "https://klyro5.vercel.app/about" }],
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // For iOS home screen icon
  },

  openGraph: {
    type: "website",
    url: "https://klyro5.vercel.app",
    title: "Klyro5 | High-Performance Web Development & Digital Solutions",
    description:
      "Partner with Klyro5 to build modern, user-first websites that scale. We deliver seamless online experiences through clean development and intuitive UI/UX design.",
    siteName: "Klyro5",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klyro5 Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Klyro5 | Custom Web Design & Digital Performance Studio",
    description:
      "Modern, high-performance websites with clean code, fast UX, and conversion-focused design. Klyro5 builds digital platforms that perform.",
    site: "@klyro5", // Use your real handle if available
    creator: "@klyro5",
    images: ["/og-image.jpg"],
  },

  category: "Web Design, Digital Agency, UI/UX Design",
  bookmarks: [
    "https://klyro5.vercel.app/about",
    "https://klyro5.vercel.app/contact",
    "https://klyro5.vercel.app/works",
    "https://klyro5.vercel.app/services",
  ],

  other: {
    whatsapp: "+919947811507",
    instagram: "https://instagram.com/klyro.5",
    facebook: "https://facebook.com/klyro.5",
    linkedin: "https://linkedin.com/company/klyro5",
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
