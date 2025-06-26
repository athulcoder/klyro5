"use client";

import { ReactTyped, Typed } from "react-typed";

export default function TypingEffect() {
  return (
    <span className="text-2xl font-bold my-3 text-white">
      <ReactTyped
        strings={[
          "Fast.",
          "Creative.",
          "Scalable.",
          "Reliable.",
          "Secure.",
          "Modern.",
          "Custom.",
          "Responsive.",
          "Optimized.",
          "Powerful.",
          "Dynamic.",
          "Elegant.",
          "Minimal.",
          "Clean.",
          "Bold.",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
    </span>
  );
}
