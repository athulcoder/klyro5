"use client";

import { motion } from "framer-motion";
import { ServiceList } from "@/assets/services/index.js";
import Image from "next/image";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We provide comprehensive digital solutions to grow your online
            presence from strategy to execution.
          </motion.p>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {ServiceList.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i + 2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {/* Optional "Learn more" link or expandable section */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
