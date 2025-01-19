import { getAllBlogs } from "@/lib/blogs";
import AdminCheck from "@/components/AdminCheck";
import BlogActions from "@/components/BlogActions";
export default async function AdminDashboard() {
  const blogs = await getAllBlogs();

  return (
    <div className="p-8 space-y-6">
      <AdminCheck />
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl text-[#635e57] font-bold">{blog.title}</h2>
          <p className="text-xl text-[#635e57]">{blog.description}</p>
          <div className="mt-4 space-x-2">
            <BlogActions blogId={blog.id} blog={blog} />
          </div>
        </div>
      ))}
    </div>
  );
}
