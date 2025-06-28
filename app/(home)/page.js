import { ServiceList } from "@/assets/services";
import GradientBackground from "@/components/GradientBackground";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground />
      <div className="relative z-20 flex flex-col h-full p-3 text-white text-3xl font-bold bg-[#141414] min-lg:px-6">
        <h1 className="">Our Services</h1>
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
    </div>
  );
}
