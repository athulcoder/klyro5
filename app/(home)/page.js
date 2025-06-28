import { ServiceList } from "@/assets/services";
import WhyChooseKlyro5 from "@/components/Features";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import ServiceCard from "@/components/ServiceCard";
import ServicesGrid from "@/components/ServicesGrid";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground />
      <ServicesGrid />

      <WhyChooseKlyro5 />
      <Footer />
    </div>
  );
}
