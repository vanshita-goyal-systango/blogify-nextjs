import { redirect } from "next/navigation";
import React from "react";

interface LogoutButtonProps {
  setIsAdmin: (value: boolean) => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ setIsAdmin }) => {
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    redirect("/users");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg text-gray-300 bg-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
