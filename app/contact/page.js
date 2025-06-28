"use client";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:contact@klyro5.com",
      display: "contact@klyro5.com",
      icon: <MdEmail />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919400500609",
      display: "+91 9400500609",
      icon: <FaWhatsapp />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919947811507",
      display: "+91 9947811507",
      icon: <FaWhatsapp />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/klyro5",
      display: "@klyro5",
      icon: <FaInstagram />,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/klyro5",
      display: "facebook.com/klyro5",
      icon: <FaFacebookF />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/klyro5",
      display: "linkedin.com/company/klyro5",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
          >
            Contact Klyro5
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-lg mb-14"
          >
            Let’s talk! We’re available across platforms. Just tap to connect.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all"
              >
                <span className="text-2xl text-white">{item.icon}</span>
                <div>
                  <p className="text-white text-base font-semibold">
                    {item.display}
                  </p>
                  <span className="text-sm text-gray-400">{item.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
