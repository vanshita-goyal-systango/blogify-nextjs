'use client';

import { useState } from "react";
import EditModal from "./blogs/EditModal"; // Assuming the EditModal exists

interface Blog {
  id: string;
  title: string;
  description: string;
}

interface BlogActionsProps {
  blogId: string;
  blog: Blog;
}

const BlogActions: React.FC<BlogActionsProps> = ({ blogId, blog }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await fetch(`https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/${blogId}`, {
        method: "DELETE",
      });
      alert("Blog deleted successfully");
      window.location.reload(); // Reloading the page after the deletion (could be improved with state management)
    } catch (error) {
      console.error("Failed to delete blog:", error);
      alert("Failed to delete the blog.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Blog updated successfully");
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <button
        onClick={handleEdit}
        className="px-4 py-2 text-white bg-yellow-500 rounded mr-2"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={isLoading}
        className="px-4 py-2 text-white bg-red-500 rounded"
      >
        {isLoading ? "Deleting..." : "Delete"}
      </button>

      {isEditing && (
        <EditModal blog={blog} onClose={handleClose} onSave={handleSave} />
      )}
    </div>
  );
};

export default BlogActions;
