import GradientBackground from "@/components/GradientBackground";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground />
      <div className="relative z-20 flex items-center justify-center h-full text-white text-3xl font-bold">
        Welcome to KLYRO5
        <p></p>
      </div>
    </div>
  );
}
