"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function ServiceCard({ title, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[240px] md:w-[260px] lg:w-[280px] mx-auto"
    >
      <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
