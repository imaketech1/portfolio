"use client";  // ✅ Needed for client-side interactivity
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full"
    >
      {darkMode ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
