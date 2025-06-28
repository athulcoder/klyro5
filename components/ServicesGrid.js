import { ServiceList } from "@/assets/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          What We Do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ServiceList.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
