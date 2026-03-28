"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects.json";

type Project = {
  id: number;
  name: string;
  description: string;
  emoji: string;
  link?: string;
};

export default function Projects() {
  return (
    <section className="p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((project: Project) => {
          const isClickable =
            project.link && project.link.trim() !== "";

          const Card = (
           <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}

  // ✅ smoother hover
  whileHover={{ scale: 1.04 }}

  // ✅ better animation
  transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}

  viewport={{ once: true }}

  className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center text-center 
  transition-all duration-300 transform-gpu will-change-transform
  ${
    isClickable
      ? "cursor-pointer hover:shadow-lg"
      : "cursor-default opacity-90"
  }`}
>
              {/* Emoji */}
              <div className="text-5xl mb-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-full">
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              {/* 🔥 View Project Indicator */}
              {isClickable && (
                <span className="text-sm text-blue-500 mt-3">
                  ↗ View Project
                </span>
              )}
            </motion.div>
          );

          return isClickable ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {Card}
            </a>
          ) : (
            <div key={project.id} className="w-full">
              {Card}
            </div>
          );
        })}
      </div>
    </section>
  );
}