'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const [isAdmin, setIsAdmin] = useState(null); 
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false); 
    redirect('/'); 
  };

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
