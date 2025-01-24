import React, { useState } from "react";

interface Blog {
  id: string;
  title: string;
  description: string;
}

interface EditModalProps {
  blog: Blog;
  onClose: () => void;
  onSave: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ blog, onClose, onSave }) => {
  const [title, setTitle] = useState<string>(blog.title);
  const [description, setDescription] = useState<string>(blog.description);

  const handleSave = async () => {
    await fetch(
      `https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/${blog.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      }
    );
    onSave();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded">
        <h2 className="mb-4 text-xl font-bold">Edit Blog</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-4 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 text-white bg-gray-500 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
