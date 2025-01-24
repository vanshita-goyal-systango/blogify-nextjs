import { getAllBlogs } from "@/lib/blogs";
import { Blog } from "@/lib/types";
import { useEffect, useState } from "react";
import AdminCheck from "../AdminCheck";
import BlogActions from "../BlogActions";
import LogoutButton from "../header/LogoutButton";

const AdminDashboard: React.FC = () => {
  
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const data = await getAllBlogs();
          setBlogs(data);
        } catch (error) { 
          console.error("Error fetching blogs:", error);
        }
      };
  
      fetchBlogs();
    }, []);
  
    useEffect(() => {
      const adminStatus = localStorage.getItem("isAdmin") === "true";
      setIsAdmin(adminStatus);
    }, []);
  
    return (
      <div className="p-8 space-y-6">

        <AdminCheck />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        {isAdmin && <LogoutButton setIsAdmin={setIsAdmin} />} 
  
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
  };
  export default AdminDashboard;


