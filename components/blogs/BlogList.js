import BlogCard from './BlogCard';

export default function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          slug={blog.id || blog.title.replace(/\s+/g, '-').toLowerCase()} 
          title={blog.title}
          description={blog.description?.slice(0, 100) || 'No description available'}
          author={blog.author}
          date={blog.date}
          thumbnail={blog.image || '/default-thumbnail.jpg'}
        />
      ))}
    </div>
  );
}
