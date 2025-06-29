import TopNavigationBar from "@/components/TopNavigation";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import { Hamburger } from "lucide-react";

export const metadata = {
  title:
    "Klyro5 | Web Development, Baby Photography, UI/UX Design & SEO Services",
  description:
    "Klyro5 is a creative digital studio offering custom web development, baby photography, SEO optimization, branding, UI/UX design, and performance-driven solutions to grow your business online.",

  keywords: [
    "Klyro5",
    "web development",
    "baby photography",
    "UI UX design",
    "Next.js website",
    "SEO services",
    "branding agency",
    "React web design",
    "India photography agency",
    "digital marketing",
    "portfolio website",
    "photographer website",
    "custom websites",
    "performance optimization",
    "creative studio",
    "web design Kerala",
    "full-stack development",
    "modern web design",
    "online business solutions",
    "responsive websites",
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
    apple: "/apple-touch-icon.png", // for IOS devices when then add wesbite to home screen
  },

  openGraph: {
    type: "website",
    url: "https://klyro5.vercel.app",
    title: "Klyro5 | Web Development, Baby Photography & Branding",
    description:
      "Explore Klyro5 – a digital agency offering custom websites, photography, branding, and SEO. Build your online presence with speed and creativity.",
    siteName: "Klyro5",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klyro5 Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Klyro5 | Custom Web Design & Photography Agency",
    description:
      "High-performance websites, baby photography, UI/UX design, and SEO. Discover the creative edge of Klyro5.",
    site: "@klyro5", // Your actual handle, if any
    creator: "@klyro5",
    images: ["/og-image.jpg"],
  },

  category: "Web Design, Photography, Digital Agency",
  bookmarks: [
    "https://klyro5.vercel.app/about",
    "https://klyro5.vercel.app/contact",
    "https://klyro5.vercel.app/works",
    "https://klyro5.vercel.app/services",
  ],

  other: {
    whatsapp: "+919605470067",
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
