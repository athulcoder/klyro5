import { ServiceList } from "@/assets/services";
import WhyChooseKlyro5 from "@/components/Features";
import GradientBackground from "@/components/GradientBackground";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground />
      <div className="relative z-20 flex flex-col h-fit p-3 pb-0 text-white  text-3xl font-bold bg-gray-900 min-lg:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center min-lg:text-left mt-4 mb-4 text-gray-900 dark:text-white">
          Our Services
        </h2>

        <div className="flex overflow-scroll gap-4 w-full  overflow-x-auto whitespace-nowrap scrollbar-hidden my-4 min-lg:flex min-lg:gap-6 ">
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
      <WhyChooseKlyro5 />
    </div>
  );
}
