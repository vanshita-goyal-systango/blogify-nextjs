// // components/BlogDetails.tsx
// "use client";

// // import Image from "next/image"; // Import the Image component

// interface Blog {
//   title: string;
//   author?: string;
//   date?: string;
//   image?: string;
//   description: string;
// }

// interface BlogDetailsProps {
//   blog: Blog;
// }

// const BlogDetails = ({ blog }: BlogDetailsProps) => {
//   const handleBack = () => {
//     window.history.back();
//   };

//   return (
//     <div>
//       {/* Blog Image */}
//       {/* <div>
//                 <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />

//       </div> */}

//       {/* Blog Content */}
//       <div>
//         {/* <h1>{blog.title ?? "Untitled Blog"}</h1> */}

//         {/* Metadata */}
//         {/* <p>
//           <span>
//             By <strong>{blog.author ?? "Anonymous"}</strong>
//           </span>{" "}
//           |{" "}
//           <span>
//             <em>
//               {blog.date ? new Date(blog.date).toLocaleDateString() : "Unknown Date"}
//             </em>
//           </span>
//         </p> */}

//         {/* Blog Description */}
//         {/* <p>{blog.description ?? "No description available."}</p> */}

//         {/* Main Content */}
//         {/* <div>
//           <p>{blog.content ?? "No content available."}</p>
//         </div> */}

//         {/* Author Bio */}
//         <div>
//           <h3>About the Author</h3>
//         </div>

//         {/* Back Button */}
//         <button onClick={handleBack}>Back to Homepage</button>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;


import { notFound } from 'next/navigation';
import classes from "./BlogDetails.module.css";
import { getAllBlogs } from '@/lib/blogs';
import BlogDetails from "@/components/BlogDetails";

// Define types for the blog details
interface Blog {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
  description: string;
}

// Fetch all blogs server-side and find the specific blog
export const getServerSideProps = async ({ params }: { params: { blogSlug: string } }) => {
  const blogs: Blog[] = await getAllBlogs(); // Fetch all blogs
  const blog = blogs.find((b) => b.id === params.blogSlug); // Find blog based on slug

  if (!blog) {
    notFound(); // If the blog is not found, show the 404 page
  }

  return {
    props: {
      blog, // Pass the blog data as a prop
    },
  };
};

interface BlogDetailsPageProps {
  blog: Blog;
}

const BlogDetailsPage = ({ blog }: BlogDetailsPageProps) => {
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
};

export default BlogDetailsPage;
