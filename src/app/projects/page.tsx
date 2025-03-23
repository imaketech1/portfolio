"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center text-center"
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              width={300} 
              height={150} 
              className="rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
