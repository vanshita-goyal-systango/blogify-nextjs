import BlogList from '@/app/components/Blog/BlogList';

async function fetchBlogs() {
    const res = await fetch('https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs/blogs');
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
}

export default async function SearchPage({ searchParams }) {
    const query = searchParams?.query?.toLowerCase() || '';
    const blogs = await fetchBlogs();
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.content.toLowerCase().includes(query)
    );

    return (
        <main className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            <BlogList blogs={filteredBlogs} />
        </main>
    );
}

