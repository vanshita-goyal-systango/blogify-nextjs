// components/LogoutButton.js
'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const [isAdmin, setIsAdmin] = useState(null); // null to prevent mismatch on first render

  useEffect(() => {
    // Check admin status only on the client side
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false); // Update state after logout
    redirect('/'); // Redirect to home after logout using `redirect`
  };

  // Prevent rendering until the admin status is checked
  if (isAdmin === null) return null;

  return (
    <>
      {isAdmin && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Logout
        </button>
      )}
    </>
  );
}
