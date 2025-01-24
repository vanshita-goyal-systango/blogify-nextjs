"use client";

import Link from "next/link";
import classes from './index.module.css';
import { useAuth } from "@/lib/contexts/AuthContext";

const ShareBlog: React.FC = () => {
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
};

export default ShareBlog;
