import Link from "next/link";

export default function LoginButton() {
  return (
    <>
      <Link
        href="/login"
        className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Login
      </Link>
    </>
  );
}
