"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Home, Briefcase, Folder, Phone, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Works", href: "/works", icon: Folder },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "About", href: "/about", icon: User },
];

export default function SideNavPanel({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-center items-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm h-[90vh] bg-[#101726] border-t border-white/10 shadow-2xl p-6 rounded-t-2xl"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-base">{label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
