"use client";

import Link from "next/link";
import { Home, User, Phone, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/services", icon: Briefcase, label: "Services" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export default function SideNavbar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-[220px] z-50 bg-[#0b1120] border-r border-white/10 shadow-xl flex flex-col justify-between py-10 px-4"
    >
      <div className="space-y-6">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-200"
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </motion.aside>
  );
}
