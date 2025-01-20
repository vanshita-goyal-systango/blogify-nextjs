import Link from 'next/link';
import BlogList from '@/components/blogs/BlogList';
import classes from './page.module.css';

export const metadata = {
  title: "All blogs",
  description: "Explore blogs shared by our community"
};

async function fetchBlogs(searchQuery = "") {
  const res = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs = await res.json();

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

export default async function BlogsPage({ searchParams }) {
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
        <p className={classes.cta}>
          <Link href="/blogs/share">Share Your Favorite Blog</Link>
        </p>
      </header>
      
      <main className={classes.main}>
        <BlogList blogs={blogs} />
      </main>
    </>
  );
}
