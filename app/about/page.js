"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Main Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-blue-600"
          >
            About Klyro5
          </motion.h2>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Who We Are</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Klyro5 is a digital agency founded with a clear vision — to blend
              exceptional aesthetics with powerful code. We are a tight-knit
              team of developers, designers, strategists, and thinkers who are
              passionate about shaping the future of the web. Our projects are
              deeply rooted in performance, usability, and storytelling.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We aim to transform brands and businesses by building digital
              products that are fast, secure, scalable, and
              conversion-optimized. Our approach combines design thinking,
              engineering principles, and market insights to create long-lasting
              solutions.
            </p>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Our Core Values</h3>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
              <li>Client-first thinking in every decision we make</li>
              <li>Attention to detail — from pixels to codebase</li>
              <li>Performance, security, and accessibility as default</li>
              <li>Continuous learning and tech-forward mindset</li>
              <li>Transparent communication and true partnerships</li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Our Tech Stack</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We specialize in modern, scalable, and performant technologies.
              Our current stack includes:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Frontend:</strong> React, Next.js, Tailwind CSS,
                TypeScript, Framer Motion
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, Next.js API Routes,
                Supabase, Firebase
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL, MongoDB, Supabase DB,
                PlanetScale
              </li>
              <li>
                <strong>DevOps:</strong> Vercel, Docker, GitHub Actions, Railway
              </li>
              <li>
                <strong>Design:</strong> Figma, Adobe XD, ShadCN UI, Storybook
              </li>
              <li>
                <strong>Integrations:</strong> Stripe, SendGrid, Discord API,
                WhatsApp Business, OAuth
              </li>
            </ul>
          </motion.div>

          {/* Why Clients Love Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">
              Why Clients Love Working with Us
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We don&apos;t just deliver. We collaborate. We co-create. Our
              process is hands-on, transparent, and adaptive. We keep clients in
              the loop from day one and involve them in every milestone. The
              result? Products that perform, and relationships that last.
            </p>
          </motion.div>

          {/* Vision for the Future */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">
              Our Vision for the Future
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As the digital world evolves, so do we. At Klyro5, we’re investing
              in emerging technologies like AI integrations, WebAssembly, edge
              computing, and more. We envision a future where design and
              technology merge to create immersive, intelligent user
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
