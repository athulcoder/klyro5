import React from "react";

export const metadata = {
  title: "Our Services | Web Design, SEO & Development by Klyro5",
  description:
    "Explore Klyro5’s services including custom web development, responsive design, UI/UX consulting, SEO optimization, and branding — everything to grow your digital presence.",
  keywords: [
    "web design services",
    "SEO optimization",
    "UI UX design",
    "Next.js development",
    "branding services",
    "digital transformation",
    "performance optimization",
    "responsive website development",
    "clean code agency",
  ],
  openGraph: {
    title: "Klyro5 Services",
    description:
      "Discover scalable digital services from Klyro5 — web design, development, and SEO that drive results.",
    url: "https://klyro5.vercel.app/services",
  },
  twitter: {
    title: "Klyro5 Services",
    description:
      "Custom websites, performance design, and growth-focused SEO — all from one digital partner.",
  },
};

function ServicePageLayout({ children }) {
  return <div>{children}</div>;
}

export default ServicePageLayout;
