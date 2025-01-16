import Link from 'next/link';
import BlogList from '@/components/blogs/BlogList';
import classes from './page.module.css';

export default async function BlogsPage() {
  const res = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    return (
      <div>
        <h2>Error loading blogs</h2>
        <p>Sorry, something went wrong.</p>
      </div>
    );
  }

  const blogs = await res.json();

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

