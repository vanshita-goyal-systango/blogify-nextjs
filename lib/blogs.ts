import { Blog } from '@/lib/types'; 

export async function getAllBlogs(searchQuery: string = ''): Promise<Blog[]> {
  const res = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs');
  
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const blogs: Blog[] = await res.json();
  
  return blogs.filter((blog) => {
    const title = blog.title?.toLowerCase() || '';
    const description = blog.description?.toLowerCase() || '';
    const content = blog.content?.toLowerCase() || '';

    return (
      title.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase()) ||
      content.includes(searchQuery.toLowerCase())
    );
  });
}
