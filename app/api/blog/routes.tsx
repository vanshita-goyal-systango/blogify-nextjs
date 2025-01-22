import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://6788b3132c874e66b7d5f5b4.mockapi.io/blogs";

interface Blog {
  title: string;
  description: string;
  content: string;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = await searchParams.get("query")?.toLowerCase() ?? "";

    try {
        const response = await fetch(API_URL);
        const blogs: Blog[] = await response.json();

        const filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(query) ??
            blog.description.toLowerCase().includes(query) ??
            blog.content.toLowerCase().includes(query)
        );

        return NextResponse.json(filteredBlogs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
