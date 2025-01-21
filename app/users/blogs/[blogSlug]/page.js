import { notFound } from 'next/navigation';
import classes from './page.module.css';
import { getAllBlogs } from '@/lib/blogs';
export default async function BlogDetailsPage({ params }) {

  const { blogSlug } = await params;
  if (!blogSlug) {
    notFound();
  }

  const blogs = await getAllBlogs();
  const blog = blogs.find((b) => b.id === blogSlug);

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
      <main className={classes.description}>
        <p>{blog.description}</p>
      </main>
    </>
  );
}
