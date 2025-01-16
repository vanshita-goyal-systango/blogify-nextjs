"use"


import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeComp({ children }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This useEffect ensures that theme switching happens only on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // We render nothing or a loading state while SSR and Hydration occur
    return null;
  }

  return (
    <div className="relative w-18 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1">
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
      <FaSun
        className="ml-auto text-yellow-400"
        size={18}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}
