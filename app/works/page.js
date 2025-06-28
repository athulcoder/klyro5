"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Build Something Great
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Have an idea or project in mind? We&apos;d love to hear from you.
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form + Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-800 dark:text-gray-200"
          >
            <div>
              <h3 className="text-xl font-semibold">📧 Email</h3>
              <p className="text-gray-500 dark:text-gray-400">
                contact@klyro5.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">💬 Social</h3>
              <p className="text-gray-500 dark:text-gray-400">
                LinkedIn, GitHub, Instagram, Twitter
              </p>
              <div className="mt-3 space-y-2">
                <a
                  href="https://wa.me/919400500609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:underline"
                >
                  <WhatsAppIcon />
                  WhatsApp: +91 9400500609
                </a>
                <a
                  href="https://wa.me/919947811507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:underline"
                >
                  <WhatsAppIcon />
                  WhatsApp: +91 9947811507
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">📍 Location</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Ernakulam, Kerala, India
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted! (Integrate with backend or Formspree)");
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// WhatsApp Icon
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16.003 3.002A12.997 12.997 0 0 0 3 16c0 2.294.616 4.49 1.788 6.422L3.003 29l6.72-1.76A12.97 12.97 0 0 0 16.003 29c7.18 0 13-5.82 13-13s-5.82-12.998-13-12.998zm0 2c6.064 0 11 4.936 11 11 0 6.064-4.936 11-11 11-2.02 0-3.995-.546-5.728-1.578l-.42-.248-3.983 1.04 1.066-3.94-.264-.43A10.937 10.937 0 0 1 5.003 16c0-6.064 4.936-11 11-11zm5.488 14.193c-.281-.14-1.653-.817-1.91-.91-.258-.093-.447-.14-.636.14s-.731.91-.896 1.096c-.165.187-.33.21-.611.07-.281-.14-1.186-.437-2.258-1.393-.835-.747-1.397-1.67-1.562-1.95-.165-.28-.018-.432.124-.57.127-.125.281-.33.421-.495.14-.165.187-.28.281-.467.093-.187.047-.35-.023-.49s-.635-1.528-.87-2.09c-.229-.55-.46-.476-.636-.486l-.54-.01c-.187 0-.49.07-.748.35-.258.28-.976.953-.976 2.324s1 2.688 1.138 2.872c.14.187 1.968 3.005 4.77 4.207.667.288 1.187.46 1.593.59.669.213 1.277.183 1.757.111.535-.08 1.653-.675 1.888-1.328.233-.653.233-1.213.163-1.328-.07-.115-.256-.187-.538-.327z" />
    </svg>
  );
}
