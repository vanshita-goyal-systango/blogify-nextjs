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
  params: Promise<{  blogSlug: string; }>
   
  };

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { blogSlug } = await params;
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


// / pages/users/blogs/[blogSlug]/page.tsx

// import BlogDetails from "@/components/BlogDetails";

// // Define types for the blog details
// interface Blog {
//   id: string;
//   title: string;
//   image: string;
//   author: string;
//   date: string;
//   description: string;
// }

// const fetchBlogDetails = async (blogSlug: string): Promise<Blog> => {
//   const res = await fetch(`https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/${blogSlug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog details");
//   }
//   return res.json();
// };

// // Define getServerSideProps for dynamic data fetching
// export const BlogDetailsPage = async ({ params }: { params: { blogSlug: string } }) => {
//   try {
//     const blog = await fetchBlogDetails(params.blogSlug); // Fetch the blog based on slug
//     return {
//       props: {
//         blog, // Pass the blog as a prop
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true, // If the blog is not found
//     };
//   }
// };

// interface BlogPageProps {
//   blog: Blog;
// }

// const BlogPage = ({ blog }: BlogPageProps) => {
//   return (
//     <div>
//       <BlogDetails blog={blog} />
//     </div>
//   );
// };

// export default BlogPage;
