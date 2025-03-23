"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      {/* Profile Image with Fade-In Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-300 dark:border-gray-700 shadow-lg"
      >
        <Image
          src="/me.jpg"
          alt="Profile Picture"
          width={360}
          height={360}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* About Me Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* About Me Description */}
      <motion.p
        className="text-lg max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        I&apos;m a passionate developer specializing in modern web technologies. I love building interactive and scalable applications.
        </motion.p>
    </section>
  );
}
