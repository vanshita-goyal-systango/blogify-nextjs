import React, { useEffect, useState } from 'react';
import Link from 'next/link';
interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  description,
  author,
  date,
  thumbnail,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-md overflow-hidden">
      <img
        src={`${thumbnail}?v=${Date.now()}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-2 text-gray-800 dark:text-gray-300">{description}</p>
        <div className="flex justify-between mt-4">
          <span className="text-sm text-gray-800 dark:text-gray-400">
            By {author}
          </span>
          <span className="text-sm text-gray-800 dark:text-gray-100">
            {isClient ? new Date(date).toISOString().slice(0,10) : "Loading..."}
          </span>
        </div>
        <div className="mt-4">
          <Link
            href={`/users/blogs/${slug}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
