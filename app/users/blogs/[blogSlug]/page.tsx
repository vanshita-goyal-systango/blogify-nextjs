import { notFound } from 'next/navigation';
import classes from './page.module.css';
import { getAllBlogs } from '@/lib/blogs';

interface Blog {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
  description: string;
}

interface BlogDetailsPageProps {
  params: {
    blogSlug: string;
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { blogSlug } = params;
  
  if (!blogSlug) {
    notFound();
  }

  const blogs: Blog[] = await getAllBlogs();
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
