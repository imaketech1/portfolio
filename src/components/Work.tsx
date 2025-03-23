"use client";

import { motion } from "framer-motion";

export default function Work() {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      {/* Work Experience Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-gray-300 dark:bg-gray-700 w-1 h-full"></div>

        {/* IBM Experience */}
        <motion.div
          className="relative flex items-center mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Company Name & Dates (Left Side) */}
          <div className="w-1/2 pr-6 text-right">
            <h3 className="text-xl font-semibold">Company Current</h3>
            <p className="text-gray-600 dark:text-gray-400">August 20XX – Present</p>
          </div>

          {/* Timeline Dot */}
          <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Job Title & Description (Right Side) */}
          <div className="w-1/2 pl-6">
            <p className="font-medium text-lg">Full Stack Developer</p>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Developed responsive and accessible mobile applications.</li>
              <li>Optimized load times and performance for a seamless user experience.</li>
              <li>Enhanced security and scalability of applications.</li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="relative flex items-center mb-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Timeline Dot */}
          <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Institute Name & Dates (Left Side) */}
          <div className="w-1/2 pr-6 text-right">
            <h3 className="text-xl font-semibold">Company Awesome</h3>
            <p className="text-gray-600 dark:text-gray-400">July 20XX – August 20XX</p>
          </div>

          {/* Degree Info (Right Side) */}
          <div className="w-1/2 pl-6">
          <p className="font-medium text-lg">Software Engineer</p>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Developed responsive and accessible web applications.</li>
              <li>Optimized website load times and performance for a seamless user experience.</li>
              <li>Enhanced security and scalability of applications.</li>
            </ul>  </div>
        </motion.div>
      </div>
    </section>
  );
}
