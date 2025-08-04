import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
    <button
      aria-label="toggle-theme"
      onClick={() => setIsDark(!isDark)}
      className="flex justify-center items-center bg-transparent hover:bg-neutral-200 dark:bg-neutral-100 dark:hover:bg-[var(--color-neon)] p-2 border border-neutral-200 rounded-full w-9 h-9 text-yellow-400 dark:text-black transition-colors duration-300 cursor-pointer"
    >
      {isDark ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
}
