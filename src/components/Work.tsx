"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import data from "@/data/work.json";

type WorkItem = {
  id: number;
  company: string;
  role: string;
  duration: string;
  side: "left" | "right";
  color: "blue" | "purple";
  points: string[];
};

export default function Work() {
  const [workItems, setWorkItems] = useState<WorkItem[]>(data as WorkItem[]);

  // sort by id
  const orderedItems = [...workItems].sort((a, b) => a.id - b.id);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Work Experience
      </motion.h2>

      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1 bg-gray-300 dark:bg-gray-700 w-1 h-full"></div>

        {orderedItems.map((item) => {
          const isLeft = item.side === "left";

          return (
            <motion.div
              key={item.id}
              className="relative flex items-center mb-10"
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* LEFT */}
              {isLeft && (
                <div className="w-1/2 pr-6 text-right">
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.duration}
                  </p>
                </div>
              )}

              {/* DOT */}
              <div
                className={`w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 -translate-x-1/2 ${
                  item.color === "blue" ? "bg-blue-500" : "bg-purple-500"
                }`}
              ></div>

              {/* ROLE + POINTS */}
              <div className={`w-1/2 ${isLeft ? "pl-6" : "pr-6 text-right"}`}>
                <p className="font-medium text-lg">{item.role}</p>
                <ul className="mt-2 text-sm list-disc list-inside text-gray-600 dark:text-gray-400">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COMPANY */}
              {!isLeft && (
                <div className="w-1/2 pl-6">
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.duration}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}