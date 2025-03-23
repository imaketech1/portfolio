"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaHeart, FaCodeBranch, FaStar } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="p-10 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center space-y-4"
      >
        <p className="flex items-center space-x-2 text-lg">
          <FaEnvelope className="text-blue-500" />
          <span>your@email.com</span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/imaketech1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Footer Section */}
      <div className="mt-10 flex flex-col items-center space-y-3">
        <p className="flex items-center text-gray-500">
          Made with <FaHeart className="text-red-500 mx-1" />  <a href="https://github.com/imaketech1" target="_blank">
          by imaketech © 🚀 </a>
        </p>

        {/* GitHub Fork & Star */}
        <div className="flex gap-4">
          <a
            href="https://github.com/imaketech1/portfolio/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md text-white hover:bg-gray-700 transition"
          >
            <FaCodeBranch className="text-green-400" />
            Fork
          </a>
          <a
            href="https://github.com/imaketech1/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md text-white hover:bg-gray-700 transition"
          >
            <FaStar className="text-yellow-400" />
            Star
          </a>
        </div>
      </div>
    </section>
  );
}
