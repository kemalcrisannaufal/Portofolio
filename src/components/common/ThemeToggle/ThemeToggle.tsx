"use client";

import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark === null) return;

    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  if (isDark === null) return null;

  return (
    <div className="right-2 bottom-2 z-50 fixed">
      <button
        aria-label="Toggle Theme"
        onClick={() => setIsDark(!isDark)}
        className="block bg-gray-200 dark:bg-neutral-600 p-2 rounded text-black dark:text-white cursor-pointer"
      >
        {isDark ? (
          <CiDark className="text-2xl lg:text-3xl" />
        ) : (
          <CiLight className="text-2xl lg:text-3xl" />
        )}
      </button>
    </div>
  );
}
