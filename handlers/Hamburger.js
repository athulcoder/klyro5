"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { motion, AnimatePresence } from "framer-motion";
import { CiHome, CiDesktop, CiMobile3 } from "react-icons/ci";
import { LiaUserAltSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

export const navItems = [
  { label: "Home", href: "/", icon: CiHome },
  { label: "Services", href: "/services", icon: CiDesktop },
  { label: "Contact", href: "/contact", icon: CiMobile3 },
  { label: "About", href: "/about", icon: LiaUserAltSolid },
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
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-center items-start"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-[40vh] bg-[#101726] overflow-y-auto border-b border-white/10 shadow-2xl p-6 rounded-b-2xl"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
              >
                <VscChromeClose className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 items-start">
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
