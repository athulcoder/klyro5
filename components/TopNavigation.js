"use client";

import SideNavPanel from "@/handlers/Hamburger";

import { BookCheck, CompassIcon, Home, Phone, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: Workflow,
  },
  {
    label: "Works",
    href: "/works",
    icon: BookCheck,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
  {
    label: "About",
    href: "/about",
    icon: CompassIcon,
  },
];
function TopNavigationBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="w-full h-[70px] z-[9999] flex items-center  justify-between fixed backdrop-blur-xl bg-black/2 ">
      {/* left nav */}
      <div className="flex gap-3 items-center max-lg:mx-4 min-lg:w-[30%] min-lg:justify-center ">
        <div className="rounded-full w-[40px] h-[40px]">
          <Image src="/logo2.png" width={40} height={40} alt="" />
        </div>
        <h1 className="font-sans font-extrabold text-lg text-white ">KLYRO5</h1>
      </div>

      {/* right nav */}
      <div className="flex gap-3 mx-4 items-center">
        <IoIosSearch size={26} className="text-white min-lg:hidden" />
        <RxHamburgerMenu
          size={26}
          className="text-white  min-lg:hidden"
          onClick={() => setShowMobileNav(true)}
        />
        {showMobileNav && (
          <SideNavPanel
            isOpen={showMobileNav}
            onClose={() => setShowMobileNav(false)}
          />
        )}
      </div>
      <ul className=" hidden  min-lg:flex gap-[50px] uppercase  items-center mx-4 min-lg:w-[70%] justify-center  text-sm font-sans text-white ">
        {navLinks.map(({ label, href }) => {
          return (
            <Link
              key={label}
              href={href}
              className="hover:text-blue-600 duration-200"
            >
              {label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default TopNavigationBar;
