import { GetServerSideProps } from 'next';
import { notFound } from 'next/navigation';
import classes from './index.module.css';
import { getAllBlogs } from '@/lib/blogs';
import { Blog } from '@/lib/types';

interface BlogDetailsPageProps {
  blog: Blog | null;
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ blog }) => {
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
          <p className={classes.date}>{new Date(blog.date).toISOString().slice(0, 10)}</p>
        </div>
      </header>
      <main className={classes.description}>
        <p>{blog.description}</p>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { blogSlug } = params as { blogSlug: string }; 
  const blogs: Blog[] = await getAllBlogs();
  
  const blog = blogs.find((b) => b.id === blogSlug) || null;  // Find the blog by slug

  if (!blog) {
    return {
      notFound: true,  
    };
  }

  return {
    props: {
      blog, 
    },
  };
};

export default BlogDetailsPage;
