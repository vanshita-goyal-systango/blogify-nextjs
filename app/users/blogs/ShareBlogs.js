"use client";

import Link from "next/link";
import classes from './page.module.css';
import { useAuth } from "@/lib/contexts/AuthContext";


export default function ShareBlog() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <p>Checking authentication...</p>
      </div>
    );
  }
  

  return (
    <div>
      {user ? (
         <p className={classes.cta}>
          <Link href="/users/blogs/share">Share Your Favorite Blog</Link>
        </p> ) : 
        (
          <p className={classes.authPrompt}>
          Please sign in to share a blog
        </p>
        )}
    </div>
  );
}
// /Users/macmini46/Desktop/Next-js/blogify/app/blogs/ShareBlogs.js