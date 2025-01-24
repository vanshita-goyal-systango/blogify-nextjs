"use client";
import React from "react";
import Link from "next/link";
import UserLogin from "./UserLogin";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import SearchButton from "./SearchButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";

const Header: React.FC = () => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b-2 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/users"
          className="text-lg sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Blogify
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="flex gap-4">
            <Link
              href="/users"
              className={`px-4 py-2 rounded-lg ${
                path === "/users"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Home
            </Link>

            <Link
              href="/users/blogs"
              className={`px-4 py-2 rounded-lg ${
                path === "/users/blogs"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Blogs
            </Link>
          </nav>
          <SearchButton />
        </div>

        <button
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
        <AuthContextProvider>
          <UserLogin />
        </AuthContextProvider>
      </div>
    </header>
  );
};

export default Header;
