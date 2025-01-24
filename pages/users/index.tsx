import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center my-12 mx-auto w-11/12 max-w-6xl">
        <div className="text-center">
          <div className="text-2xl flex flex-col items-center justify-center gap-4 mt-4 text-gray-200 dark:text-gray-300">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold font-montserrat tracking-widest uppercase bg-gradient-to-r from-blue-700 to-purple-400 bg-clip-text text-transparent">
                Blogify is for NextLevel Bloggers
              </h1>
              <p className="text-gray-800 dark:text-gray-100">Write and share your blogs with the world.</p>
            </div>
            <Link
              href="/users/blogs"
              className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-400 text-black font-bold hover:from-blue-500 hover:to-purple-300 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-purple-500"
            >
              Explore Blogs
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center">
        <section className="flex flex-col text-black-800 dark:text-gray-100 text-2xl max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <p>
            Blogify is a platform for bloggers to share their blogs with the world. It&apos;s a place to discover new blogs, and to connect with other bloggers.
          </p>
          <p>
            Blogify is a place to discover new blogs, and to connect with other bloggers.
          </p>
        </section>

        <section className="flex flex-col text-black-800 dark:text-gray-100 text-2xl max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-3xl font-semibold">Why Blogify?</h2>
          <p>
            Blogify is a platform for bloggers to share their favorite blogs with the world. It&apos;s a place to discover new content, and to connect with other bloggers.
          </p>
          <p>
            Blogify is a place to discover new blogs, and to connect with other bloggers.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
