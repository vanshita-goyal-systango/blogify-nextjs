import { redirect } from "next/navigation";

export default function LogoutButton({ setIsAdmin }) {
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    redirect("/");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Logout
      </button>
    </>
  );
}
