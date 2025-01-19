'use client';

import { useState } from 'react';
import EditModal from './blogs/EditModal';
export default function BlogActions({ blogId, blog }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  const handleDelete = async () => {
    setIsLoading(true);
    await fetch(`https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/${blogId}`, {
      method: "DELETE"
    });
    alert("Blog deleted successfully");
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Blog updated successfully');
  };

  const handleClose = () => {
    setIsEditing(false); 
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
