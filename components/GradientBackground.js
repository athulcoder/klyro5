"use client";

import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import Link from "next/link";

export default function GradientBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0b1120]">
      {/* Energy blobs */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-purple-800 opacity-30 blur-3xl rounded-full animate-pulse-slow top-1/4 left-1/3" />
        <div className="absolute w-80 h-80 bg-blue-800 opacity-20 blur-2xl rounded-full animate-pulse-fast top-2/3 left-1/4" />
        <div className="absolute w-64 h-64 bg-pink-500 opacity-25 blur-2xl rounded-full animate-pulse-mid top-1/2 left-2/3" />
      </div>

      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 opacity-20 blur-2xl animate-gradient z-0" />

      {/* Centered content with animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold my-3 text-center md:text-5xl"
        >
          Rapidly build modern premium websites
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-center text-gray-400 mt-3 leading-[28px] max-w-[600px]"
        >
          Klyro5 is your partner in creating cutting-edge websites and digital
          platforms. From design to development, we craft high-performance,
          user-first experiences that grow your business online.
        </motion.h4>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex gap-4 my-6"
        >
          <button className="bg-blue-600 py-2 px-4 rounded-2xl w-[130px] hover:border-white hover:border-[2px] cursor-pointer transition-all duration-150">
            <Link href="/contact"> Contact Us</Link>
          </button>

          <button className="hover:border-white py-3 px-6 rounded-2xl w-[130px] cursor-pointer border-[2px] border-blue-600 transition-all duration-150">
            Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
}
