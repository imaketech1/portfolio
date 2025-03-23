"use client";

import { motion } from "framer-motion";

export default function Education() {
  // Function to handle Google search
  const searchUniversity = (name: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(name)}`, "_blank");
  };

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="w-full max-w-3xl space-y-8">
        {/* Ongoing Degree - ABC University */}
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Master of Technology in Computer Science
          </p>
          <h3
            className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-2 cursor-pointer hover:underline"
            onClick={() => searchUniversity("ABC University")}
          >
            ABC University
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            July 20XX – Present
          </p>

          {/* Progress Bar - 80% Completed */}
          <div className="mt-6 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            80% Completed
          </p>
        </motion.div>

        {/* Completed Degree - XYZ University */}
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Bachelor of Technology in Computer Science
          </p>
          <h3
            className="text-2xl font-semibold text-green-600 dark:text-green-400 mt-2 cursor-pointer hover:underline"
            onClick={() => searchUniversity("XYZ University")}
          >
            XYZ University
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            August 20XX – May 20XX
          </p>

          {/* Progress Bar - 100% Completed */}
          <div className="mt-6 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-green-500 h-3 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Completed 🎓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
