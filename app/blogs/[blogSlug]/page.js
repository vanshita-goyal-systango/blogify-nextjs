import { notFound } from 'next/navigation';
import classes from './page.module.css';

async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs`);
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs`);
    }

    const blogs = await res.json();
    return blogs.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug) || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogDetailsPage({ params }) {
  const blog = await getBlogBySlug(params.blogSlug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
        </div>
        <div className={classes.headerText}>
          <h1>{blog.title}</h1>
          <p className={classes.creator}>By {blog.author}</p>
          <p className={classes.date}>{new Date(blog.date).toLocaleDateString()}</p>
        </div>
      </header>
      <main className={classes.content}>
        <p>{blog.description}</p>
      </main>
    </>
  );
}
