interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  content?: string;
}

export async function getAllBlogs(): Promise<Blog[]> {
  const res = await fetch("https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs");
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return await res.json();
}
