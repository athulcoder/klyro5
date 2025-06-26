"use client";

import Link from "next/link";
import { Home, User, Phone, Briefcase } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/services", icon: Briefcase, label: "Services" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export default function SideNavbar() {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 ">
      <div className="w-[70px] h-[300px] py-4 flex flex-col justify-between items-center rounded-2xl backdrop-blur-md bg-green-400/10 border border-white/20 shadow-lg">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="group relative flex items-center justify-center w-[40px] h-10 text-gray-400 hover:bg-white/20 rounded-md transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm whitespace-nowrap bg-white/10 text-grey-400 px-2 py-1 rounded-md shadow backdrop-blur-md border border-white/20">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
