"use client";

import Image from "next/image";

export default function GradientBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0b1120]">
      {/* Pulsing yellow energy blobs */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-purple-800 opacity-30 blur-3xl rounded-full animate-pulse-slow top-1/4 left-1/3" />
        <div className="absolute w-80 h-80 bg-blue-800 opacity-20 blur-2xl rounded-full animate-pulse-fast top-2/3 left-1/4" />
        <div className="absolute w-64 h-64 bg-yellow-500 opacity-25 blur-2xl rounded-full animate-pulse-mid top-1/2 left-2/3" />
      </div>

      {/* Optional animated background gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 opacity-20 blur-2xl animate-gradient z-0" />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold">
        <div>
          <Image src="/logo2.png" alt="" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
