"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/ThemeProvider";
import { Sun, Moon, Github, Linkedin, Globe } from "lucide-react";
import data from "@/data/user.json";
import user from "@/data/about.json";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const hasAbout = user.about?.trim();
  const isValidUrl = (url?: string) => {
    if (!url || url.trim() === "") return false;

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  const hasLink = isValidUrl(data.link);
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gray-100 text-black dark:bg-gray-950 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 animate-pulse" />

      {/* Theme Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={toggleTheme}
        className={`absolute top-10 left-10 w-16 h-16 flex items-center justify-center rounded-full shadow-lg 
          ${theme === "dark" ? "bg-blue-600 text-white" : "bg-yellow-400 text-black"}
        `}
      >
        {theme === "dark" ? <Moon size={28} /> : <Sun size={28} />}
      </motion.button>

      {/* Floating Rectangles */}
      <motion.div
        animate={{ x: [0, 30, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rotate-45 opacity-30"
      />
      <motion.div
        animate={{ x: [-20, 20, -20], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-20 h-20 bg-red-500 rotate-12 opacity-30"
      />

      {/* Hero Text */}
      <h1 className="text-5xl font-bold">
        Hi, I&apos;m <span className="text-blue-400">{data.name}</span>
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {data.tagline}
      </p>

    <br></br>
 {hasAbout && (
        <motion.p
          className="text-lg max-w-2xl text-center leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {user.about}
        </motion.p>
      )}

        {/* Social Links */}
     <div className="mt-4 flex gap-6 relative z-10">
      {hasLink && (
  <a
    href={data.link}
    target="_blank"
    rel="noopener noreferrer"
  ><Globe size={32} /> 
  </a>
)}
  {data.github?.trim() && (
    <a href={data.github} target="_blank" rel="noopener noreferrer">
      <Github size={32} />
    </a>
  )}

  {data.linkedin?.trim() && (
    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
      <Linkedin size={32} />
    </a>
  )}
</div>
    </section>
  );
}
