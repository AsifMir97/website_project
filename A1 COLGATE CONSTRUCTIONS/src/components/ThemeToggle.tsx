import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 z-30 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur hover:scale-110 transition"
      title="Toggle Theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} className="text-yellow-300" />}
    </button>
  );
};

export default ThemeToggle;
