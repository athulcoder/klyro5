export const metadata = {
  title: "About Klyro5 | Modern Web Development & Design Studio",
  description:
    "Klyro5 is a creative studio specializing in building high-performance websites and digital platforms. Learn about our mission, team, and design-first philosophy.",
  keywords: [
    "About Klyro5",
    "web design agency",
    "high-performance websites",
    "creative digital studio",
    "UI UX experts",
    "Next.js developers",
    "modern web agency",
    "web development India",
  ],
  openGraph: {
    title: "About Klyro5",
    description:
      "Discover Klyro5 – a web development and design studio delivering cutting-edge digital experiences.",
    url: "https://klyro5.vercel.app/about",
  },
  twitter: {
    title: "About Klyro5",
    description:
      "Learn about the team behind Klyro5 and our mission to craft high-performance web solutions.",
  },
};

function AboutPageLayout({ children }) {
  return <div>{children}</div>;
}

export default AboutPageLayout;
