"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import data from "@/data/edu.json";

type EducationItem = {
  id: number;
  degree: string;
  university: string;
  duration: string;
  progress: number;
  status: string;
  color: "blue" | "green";
};

export default function Education() {
  const [educationItems] = useState<EducationItem[]>(data as EducationItem[]);

  // sort by id
  const orderedItems = [...educationItems].sort((a, b) => a.id - b.id);

  const searchUniversity = (name: string) => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(name)}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6">
      
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h2>

      <div className="w-full max-w-3xl space-y-8">
        {orderedItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Degree */}
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {item.degree}
            </p>

            {/* University */}
            <h3
              className={`text-2xl font-semibold mt-2 cursor-pointer hover:underline ${
                item.color === "blue"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-green-600 dark:text-green-400"
              }`}
              onClick={() => searchUniversity(item.university)}
            >
              {item.university}
            </h3>

            {/* Duration */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {item.duration}
            </p>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className={`h-3 rounded-full ${
                  item.color === "blue" ? "bg-blue-500" : "bg-green-500"
                }`}
                initial={{ width: "0%" }}
                whileInView={{ width: `${item.progress}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Status */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {item.status}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}