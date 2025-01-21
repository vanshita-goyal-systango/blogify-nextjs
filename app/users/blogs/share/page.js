'use client';
import { redirect } from 'next/navigation';




export default function CreateBlog() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newBlog = {
      title: formData.get('title'),
      description: formData.get('description'),
      author: formData.get('author'),
      image: formData.get('image'), 
      date: new Date().toISOString(),
    };

    const response = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    });

    if (response.ok) {
      alert('Blog created successfully!');
      redirect('/users/blogs');

    } else {
      alert('Failed to create blog.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-xl mx-auto space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Create Blog
      </button>
    </form>
  );
}
