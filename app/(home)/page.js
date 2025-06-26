import { ServiceList } from "@/assets/services";
import GradientBackground from "@/components/GradientBackground";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground />
      <div className="relative z-20 flex flex-col h-full p-3 text-white text-3xl font-bold bg-[#141414]">
        <h1>Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ServiceList.map((item) => {
            return (
              <ServiceCard
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
