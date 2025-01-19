'use client';

import { useState } from 'react';
import EditModal from './blogs/EditModal';
export default function BlogActions({ blogId, blog }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Track if the edit modal is open

  const handleDelete = async () => {
    setIsLoading(true);
    await fetch(`https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/${blogId}`, {
      method: "DELETE"
    });
    alert("Blog deleted successfully");
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEditing(true); // Open the edit modal
  };

  const handleSave = () => {
    // Refresh blog data or update UI after save, such as closing modal
    setIsEditing(false);
    alert('Blog updated successfully');
  };

  const handleClose = () => {
    setIsEditing(false); // Close the edit modal
  };

  return (
    <div>
      <button
        onClick={handleEdit}
        className="px-4 py-2 text-white bg-yellow-500 rounded"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={isLoading}
        className="px-4 py-2 text-white bg-red-500 rounded"
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>

      {/* Show EditModal when isEditing is true */}
      {isEditing && (
        <EditModal
          blog={blog}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
