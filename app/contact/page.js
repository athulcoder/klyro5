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
      href: "mailto:klyrofive@gmail.com",
      display: "contact@klyro5.com",
      icon: <MdEmail />,
    },
    {
      label: "+91 9605470067",
      href: "https://wa.me/919605470067",
      display: "Irfan VS",
      icon: <FaWhatsapp />,
    },
    {
      label: "+91 9400500609",
      href: "https://wa.me/919400500609",
      display: "Amaan Ahammed V",
      icon: <FaWhatsapp />,
    },
    {
      label: "+91 9947811507",
      href: "https://wa.me/919947811507",
      display: "Athul Sabu",
      icon: <FaWhatsapp />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/klyro.5",
      display: "@klyro.5",
      icon: <FaInstagram />,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/klyro.5",
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
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
          >
            Contact Klyro5
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-gray-400 text-lg mb-14"
          >
            Let’s talk! We’re available across platforms. Just tap to connect.
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
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
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
