import Link from 'next/link';
import BlogList from '@/components/blogs/BlogList';
import classes from './page.module.css';
import ShareBlog from './ShareBlogs';
import { Metadata } from 'next';

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  image?: string; 
}

export const metadata: Metadata = {
  title: "All blogs",
  description: "Explore blogs shared by our community"
};

async function fetchBlogs(searchQuery: string = ""): Promise<Blog[]> {
  const res = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs: Blog[] = await res.json();

  return blogs.filter(blog => {
    const title = blog.title?.toLowerCase() || "";
    const description = blog.description?.toLowerCase() || "";
    const content = blog.content?.toLowerCase() || "";
    
    return (
      title.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase()) ||
      content.includes(searchQuery.toLowerCase())
    );
  });
}

interface BlogsPageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const searchQuery = searchParams?.query || ""; 
  const blogs = await fetchBlogs(searchQuery); 

  return (
    <>
      <header className={classes.header}>
        <h1>
          Your Blog <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite blog and share it with the world. It's easy and fun!
        </p>
       <ShareBlog/>
      </header>
      
      <main className={classes.main}>
        <BlogList blogs={blogs} />
      </main>
    </>
  );
}
