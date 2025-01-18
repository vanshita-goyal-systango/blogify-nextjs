import Link from 'next/link';
import BlogList from '@/components/blogs/BlogList';
import classes from './page.module.css';
import { getAllBlogs } from '@/lib/blogs';

export default async function BlogsPage() {

  const  blogs = await getAllBlogs();


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

