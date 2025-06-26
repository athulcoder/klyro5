"use client";

import Image from "next/image";
import Typed from "react-typed";
import TypingEffect from "./TypingEffect";

export default function GradientBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0b1120] ">
      {/* Pulsing yellow energy blobs */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-purple-800 opacity-30 blur-3xl rounded-full animate-pulse-slow top-1/4 left-1/3" />
        <div className="absolute w-80 h-80 bg-blue-800 opacity-20 blur-2xl rounded-full animate-pulse-fast top-2/3 left-1/4" />
        <div className="absolute w-64 h-64 bg-pink-500 opacity-25 blur-2xl rounded-full animate-pulse-mid top-1/2 left-2/3" />
      </div>

      {/* Optional animated background gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 opacity-20 blur-2xl animate-gradient z-0" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white  p-3 ">
        <h1 className="max-lg:text-center text-4xl  font-bold my-3 min-lg:text-5xl">
          Rapidly build modern premium websites
        </h1>
        <TypingEffect />

        <h4 className="text-center text-gray-400 mt-3 leading-[28px] max-w-[600px]">
          Klyro5 is your partner in creating cutting-edge websites and digital
          platforms. From design to development, we craft high-performance,
          user-first experiences that grow your business online.
        </h4>

        <div className="flex gap-4 my-4">
          <button className="bg-blue-600 py-2 px-4 rounded-2xl w-[130px]  hover:border-white hover:border-[2px] cursor-pointer duration-100">
            Get start
          </button>

          <button className="hover:border-white py-3 px-6 rounded-2xl w-[130px] cursor-pointer border-[2px] border-blue-600 duration-100">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
