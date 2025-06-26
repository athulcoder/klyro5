"use client";

import { useEffect, useState } from "react";

export default function GradientBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-none"
      style={{
        background: `radial-gradient(
          circle at ${position.x}px ${position.y}px,
          rgba(128, 0, 255, 0.6),   /* purple */
          rgba(0, 128, 255, 0.6),   /* blue */
          rgba(15, 23, 42, 1)       /* dark navy background */
        )`,
        transition: "background 0.2s ease",
      }}
    >
      {/* Custom tiny cursor */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: `${position.x - 2}px`,
          top: `${position.y - 2}px`,
          width: "4px",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "9999px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold">
        Move your mouse
      </div>
    </div>
  );
}
