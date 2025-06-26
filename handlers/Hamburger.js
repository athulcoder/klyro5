"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/", icon: null },
  { label: "Services", href: "/services", icon: null },
  { label: "Works", href: "/works", icon: null },
  { label: "Contact", href: "/contact", icon: null },
  { label: "About", href: "/about", icon: null },
];

export default function SideNavPanel({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-gray-700 rounded-lg  w-[400px] h-[400px] p-6 mt-5 mr-5 shadow-lg transition-transform duration-1000 transform translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="mb-6 text-gray-200 hover:text-white "
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col gap-4 text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2 font-bold"
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>,
    document.body
  );
}
