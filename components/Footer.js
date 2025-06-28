"use client";

import { ServiceList } from "@/assets/services";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex gap-2 items-center">
              <div className="rounded-full w-[30px] h-[30px]">
                <Image src="/logo2.png" width={30} height={30} alt="" />
              </div>{" "}
              Klyro5{" "}
            </h2>
            <p className="text-sm text-gray-400">
              Your partner in crafting high-performance, user-first websites and
              platforms. We combine modern design with scalable, clean
              development to deliver seamless online experiences that engage and
              convert.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {ServiceList.map((item, index) => {
                if (index < 4) return <li key={item.title}>{item.title}</li>;
                else return;
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Portfolio</li>

              <li>Contact</li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/klyro.5?igsh=Z3NmdnlvdG02d2Rl"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/klyro.5?igsh=Z3NmdnlvdG02d2Rl"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/klyro5?t=USAeCvft31ozLd2bkl6jXw&s=09"
                className="text-gray-400 hover:text-white"
              >
                <RiTwitterXFill size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400"> klyrofive@gmail.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Klyro5. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
