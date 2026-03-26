"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaHeart, FaCodeBranch, FaStar } from "react-icons/fa";
import data from "@/data/user.json";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const hasEmail = data.email?.trim();
  const hasCV = data.cv?.trim();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    // Opens user's email client
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

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
      {hasEmail && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="flex flex-col items-center space-y-4"
  >
    <p className="flex items-center space-x-2 text-lg">
      <FaEnvelope className="text-blue-500" />
      <span>{data.email}</span>
    </p>
  </motion.div>
)}

      {/* Contact Form */}
      {hasEmail && (
  <div className="mt-10 flex flex-col items-center">
    <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
</div>
)}
{hasCV && (
  <motion.div className="mt-16 w-full max-w-3xl mx-auto">
    

    <iframe
      src={data.cv}
      className="w-full h-[500px] rounded-lg border"
    ></iframe>

    <div className="flex justify-center mt-4">
      <a
        href={data.cv}
        download
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Download CV
      </a>
    </div>
  </motion.div>
)}
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
