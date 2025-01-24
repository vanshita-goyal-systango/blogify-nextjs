import React from 'react';
import BlogList from '@/components/blogs/BlogList';
import classes from './index.module.css';
import BlogShareLink from './BlogShareLink';
import { GetServerSideProps } from 'next';
import { getAllBlogs } from '@/lib/blogs';
import { Blog } from '@/lib/types';

interface BlogsPageProps {
  blogs: Blog[];
  searchQuery: string;
}

export const metadata = {
  title: 'All blogs',
  description: 'Explore blogs shared by our community',
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = Array.isArray(query.query) ? query.query[0] : query.query ?? '';

  try {
    const blogs = await getAllBlogs(searchQuery);

    return {
      props: {
        blogs,
        searchQuery,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      notFound: true,
    };
  }
};

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs, searchQuery }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Your Blog <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite blog and share it with the world. It's easy and fun!
        </p>
        <BlogShareLink />
      </header>

      <main className={classes.main}>
        <BlogList blogs={blogs} />
      </main>
    </>
  );
};

export default BlogsPage;
